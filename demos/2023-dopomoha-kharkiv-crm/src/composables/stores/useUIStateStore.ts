import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const errorMessages = {
  selectError: 'Can’t find an appeal with this number',
  requiredError: 'This is a required field',
  validationError: 'Choose one of the promted options',
}

export const useUIStateStore = defineStore('app-state', () => {
  const isLoading = ref(false)
  const isCreating = ref(false)
  const isSaving = ref(false)
  const isSelectFormOpen = ref(true)
  const isDataCardExpanded = ref(false)
  const isPristine = ref(true)
  const isAppealEditorOpen = ref(false)

  const errors = reactive({
    selectError: {
      isError: false,
      message: errorMessages.selectError,
    },
    requiredError: {
      isError: false,
      message: errorMessages.requiredError,
    },
    validationError: {
      isError: false,
      message: errorMessages.validationError,
    },
  })

  const onCardExpand = () =>
    (isDataCardExpanded.value = !isDataCardExpanded.value)
  const onClearErrors = () => {
    errors.selectError.isError = false
  }
  const onCloseSelectForm = () => (isSelectFormOpen.value = false)
  const onModifyInput = () => (isPristine.value = false)
  const onOpenSelectForm = () => (isSelectFormOpen.value = true)

  return {
    errors,

    isAppealEditorOpen,
    isDataCardExpanded,
    isSelectFormOpen,

    isCreating,
    isLoading,
    isSaving,
    isPristine,

    onCardExpand,
    onClearErrors,
    onCloseSelectForm,
    onModifyInput,
    onOpenSelectForm,
  }
})
