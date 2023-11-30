import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import type { Column, LabeledColumns } from '@dkc:content'
import { columnsSchema, labeledColumnsSchema } from '@dkc:content'

// Mock Google Scripts Data
import { google } from '@dkc:server/googleScripts'
import { useUIStateStore } from './useUIStateStore'

export const useAppealsDataStore = defineStore('appeals', () => {
  const uiStateStore = useUIStateStore()
  const { onClearErrors, onCloseSelectForm, onOpenSelectForm } = uiStateStore

  /** Used in `SelectSingleAppealForm`, detached from `currentAppealId */
  const selectedAppealId = ref<string>('')

  /** Used to sign appeal data that currently populates Editor Form */
  const currentAppealId = ref<string | undefined>()

  /** Form data structured as an array of Columns */
  const columnsArray = ref<Column[]>([])

  /** Form data structured as an object with keys that represent Column semantic */
  const labeledColumns = ref<Partial<LabeledColumns>>({})

  const isEditingExistingAppeal = ref(true)
  const isCreatingNewAppeal = ref(false)
  const isNewAppeal = ref(true)

  /** Mixin that is triggered each time appead data is updated */
  const onUpdateAppealData = (serverData: unknown) => {
    // Throws if data is invalid
    const columns = columnsSchema.parse(serverData)
    columnsArray.value = reactive(columns)
    labeledColumns.value = labeledColumnsSchema.parse(columnsArray.value)

    currentAppealId.value = labeledColumns.value.appealId?.value
    uiStateStore.isPristine = true
    uiStateStore.isAppealEditorOpen = true
  }

  /** Uses Google Scripts to load an appeal by its ID (if it exists) */
  const onSelectAppeal = (newAppealId: string) => {
    onClearErrors()
    uiStateStore.isLoading = true

    return google.script.run
      .withSuccessHandler(onLoadSelectedAppeal)
      .withFailureHandler(onFailToLoadSelectedAppeal)
      .querySingleAppeal(newAppealId)
  }

  /** Is triggered when the appeal is selected successfully */
  const onLoadSelectedAppeal = (serverData: unknown) => {
    try {
      onUpdateAppealData(serverData)
      onCloseSelectForm()
      isNewAppeal.value = false
      uiStateStore.isLoading = false
    } catch (error: unknown) {
      onFailToLoadSelectedAppeal(error as Error)
    }
  }

  /** Is triggered when the appeal has failed to load */
  const onFailToLoadSelectedAppeal = (error: Error | string) => {
    google.script.run.log(error)
    uiStateStore.isLoading = false
    uiStateStore.isAppealEditorOpen = false

    uiStateStore.errors.selectError.isError = true
  }

  /** Uses Google Scripts to create new appeal in the spreadsheet */
  const onCreateAppeal = () => {
    uiStateStore.isCreating = true

    return google.script.run
      .withSuccessHandler(onLoadCreatedAppeal)
      .withFailureHandler(onFailToLoadCreatedAppeal)
      .createNewRow()
  }

  /** Is triggered when the new appeal is created successfully */
  const onLoadCreatedAppeal = (serverData: unknown) => {
    try {
      onUpdateAppealData(serverData)
      onCloseSelectForm()
      uiStateStore.isCreating = false
      isNewAppeal.value = true
    } catch (error: unknown) {
      onFailToLoadCreatedAppeal(error as Error)
    }
  }

  /** Is triggered when the new appeal has failed to create */
  const onFailToLoadCreatedAppeal = (error: Error | string) => {
    google.script.run.log(error)
    uiStateStore.isCreating = false
    uiStateStore.isAppealEditorOpen = false
  }

  /** Uses Google Scripts to update appeal data by ID in spreadsheet */
  const onSaveAppealData = () => {
    // TODO: Update it to save only the changed values
    const id = columnsArray.value[0].value
    uiStateStore.isSaving = true
    return google.script.run
      .withSuccessHandler(onLoadSavedAppeal)
      .withFailureHandler(onFailToLoadSavedAppeal)
      .updateRowById(columnsArray.value, id)
  }

  /** Is triggered when the appeal data was successfully saved */
  const onLoadSavedAppeal = () => {
    isNewAppeal.value = false
    uiStateStore.isPristine = true
    uiStateStore.isSaving = false

    selectedAppealId.value = currentAppealId.value ?? selectedAppealId.value

    isEditingExistingAppeal.value = true
    isCreatingNewAppeal.value = false
  }

  /** Is triggered when the appeal data failed to save */
  const onFailToLoadSavedAppeal = (error: Error | string) => {
    google.script.run.log(error)
  }

  // TODO: Update logic to reset appeal data
  const onRejectAppealData = async (isPristine: boolean) => {
    if (isPristine) {
      return google.script.host.close()
    }
    // FixIt: Switch to UI Dialog
    const isWidgetClosed = window.confirm(
      'Are you sure you want to discard entered data?',
    )

    if (!isWidgetClosed) return

    google.script.host.close()
    isNewAppeal.value = false
    uiStateStore.isPristine = true
  }

  // FixIt: Double check logic, remove redundancy
  const createNewAppeal = async () => {
    if (isCreatingNewAppeal.value) return

    const isMovingAway =
      uiStateStore.isPristine ||
      window.confirm(
        'Your edits will be lost! Are you sure you want to discard all changes?',
      )

    if (!isMovingAway) return

    isEditingExistingAppeal.value = false
    isCreatingNewAppeal.value = true

    if (isNewAppeal.value && currentAppealId.value) {
      onSelectAppeal(currentAppealId.value)
      isNewAppeal.value = true

      return
    }

    await onCreateAppeal()
    selectedAppealId.value = currentAppealId.value ?? selectedAppealId.value
  }

  const editExistingAppeal = () => {
    if (isEditingExistingAppeal.value) return

    const isMovingAway =
      uiStateStore.isPristine ||
      window.confirm(
        'Your edits will be lost! Are you sure you want to discard all changes?',
      )

    if (!isMovingAway) return

    isEditingExistingAppeal.value = true
    isCreatingNewAppeal.value = false

    if (
      currentAppealId.value &&
      currentAppealId.value !== selectedAppealId.value &&
      !isNewAppeal.value
    ) {
      return onSelectAppeal(currentAppealId.value)
    }

    onOpenSelectForm()
  }

  return {
    currentAppealId,
    selectedAppealId,
    columnsArray,
    labeledColumns,

    isCreatingNewAppeal,
    isEditingExistingAppeal,
    isNewAppeal,

    editExistingAppeal,
    createNewAppeal,

    onCreateAppeal,
    onSelectAppeal,
    onSaveAppealData,
    onLoadSavedAppeal,
    onLoadCreatedAppeal,
    onRejectAppealData,
  }
})
