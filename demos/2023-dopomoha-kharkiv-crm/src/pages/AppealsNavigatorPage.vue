<script setup lang="ts">
import { storeToRefs } from 'pinia'

import {
  AppealDataCard,
  EditAppealDataForm,
  SelectSingleAppealForm,
} from '@dkc:components/navigator'
import { useUIStateStore, useAppealsDataStore } from '@dkc:composables'

const uiStateStore = useUIStateStore()
const { onOpenSelectForm, onCardExpand, onCloseSelectForm } = uiStateStore
const {
  isLoading,
  isCreating,
  isSaving,
  isPristine,
  isAppealEditorOpen,
  isSelectFormOpen,
  isDataCardExpanded,
} = storeToRefs(uiStateStore)

const appealsDataStore = useAppealsDataStore()
const { onSelectAppeal, onCreateAppeal } = appealsDataStore
const { currentAppealId, selectedAppealId, isNewAppeal } =
  storeToRefs(appealsDataStore)
</script>

<template>
  <div
    class="container flex flex-grow flex-col items-center p-0 sm:px-4 sm:pt-4"
  >
    <div
      v-show="isSelectFormOpen"
      class="card"
    >
      <h1 class="tracking-snug mb-4 mt-4">Select an Appeal</h1>
      <SelectSingleAppealForm
        v-model:selectedAppealId="selectedAppealId"
        :current-appeal-id="currentAppealId"
        :is-loading="isLoading"
        :is-creating="isCreating"
        :is-appeal-open="isAppealEditorOpen"
        :on-reject="onCloseSelectForm"
        :on-confirm="onSelectAppeal"
        :on-create="onCreateAppeal"
        :select-error="uiStateStore.errors.selectError"
      />
    </div>
    <div class="w-full max-w-5xl sm:-mt-7">
      <div
        v-if="!isSelectFormOpen"
        class="w-full md:grid md:grid-cols-12"
      >
        <AppealDataCard
          class="md:col-span-5"
          :labeled-columns="appealsDataStore.labeledColumns"
          :is-data-card-expanded="isDataCardExpanded"
          :on-data-card-expand="onCardExpand"
          :on-open-select-form="onOpenSelectForm"
        />
        <EditAppealDataForm
          class="md:col-span-7"
          :spreadsheet-data="appealsDataStore"
          :current-serial-number="currentAppealId"
          :is-pristine="isPristine"
          :is-loading="isLoading"
          :is-creating="isCreating"
          :is-saving="isSaving"
          :is-new-appeal="isNewAppeal"
          @select-serial-number="onSelectAppeal($event)"
        />
      </div>
    </div>
  </div>
</template>
