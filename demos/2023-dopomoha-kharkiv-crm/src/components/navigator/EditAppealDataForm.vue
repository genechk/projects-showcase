<script setup lang="ts">
import { ref, type PropType } from 'vue'

import FormButtons from './FormButtons.vue'
import FormField from './FormField.vue'
import { TabsPanel } from '../ui'
import { useAppealsDataStore } from '@dkc:composables'
import { tabList } from '@dkc:content'
import type { SpreadsheetData } from '@dkc:types'

const props = defineProps({
  spreadsheetData: {
    type: Object as PropType<SpreadsheetData>,
    default: () => ({ columns: [] }),
  },
  isSaving: {
    type: Boolean,
    required: true,
  },
  isNewAppeal: {
    type: Boolean,
    default: true,
  },
  isPristine: {
    type: Boolean,
    default: true,
  },
})

const activeTab = ref(0)
const showAll = ref(false)

const { onSaveAppealData } = useAppealsDataStore()

const onCtrlEnter = () => {
  if (!props.isPristine) {
    onSaveAppealData()
  }
}
</script>

<template>
  <form
    class="tab-content pt-4"
    novalidate
    @keyup.ctrl.enter="onCtrlEnter"
  >
    <TabsPanel
      v-model:activeTab="activeTab"
      :tabs="tabList"
      :show-all="showAll"
    />
    <div
      class="flex flex-col items-stretch px-micro py-2 pt-3 micro:px-sm sm:px-md"
    >
      <div
        v-for="column in spreadsheetData.columnsArray"
        :key="column.semantic"
      >
        <FormField
          v-model:value="column.value"
          :semantic="column.semantic"
          :layout="column.layout"
          :name="column.name"
          :type="column.type"
          :show-all="showAll"
          :active-tab="activeTab"
          :tabs="column.tabs"
          :options="column.options"
          :is-new-appeal="isNewAppeal"
          :is-validated="column.isValidated"
          :is-required="column.isRequired"
          :is-disabled="column.isDisabled"
          placeholder=""
        />
      </div>
    </div>
    <div class="row mb-1 mt-1 p-2 pb-4">
      <div class="pb-2 text-center sm:pb-4">
        <a
          class="my-4 border-b border-dotted border-slate-700 pb-px text-sm hover:border-primary-800 focus:ring-0 sm:my-6 sm:text-base"
          href="#"
          @click.prevent="() => (showAll = !showAll)"
        >
          {{ !showAll ? 'Show All' : 'Collapse' }}
        </a>
      </div>
    </div>
    <FormButtons
      :is-pristine="isPristine"
      :is-loading="isSaving"
    />
  </form>
</template>
