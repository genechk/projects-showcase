<script setup lang="ts">
import ArrowPathIcon from '@heroicons/vue/20/solid/ArrowPathIcon'
import { computed, onMounted, onUpdated, ref } from 'vue'

import type { LabeledColumns } from '@dkc:content'
import { AppLink } from '@dkc:components/ui'

const props = defineProps<{
  labeledColumns: Partial<LabeledColumns>
  isDataCardExpanded: boolean
  isNewAppeal?: boolean
  onDataCardExpand: () => void
  onOpenSelectForm: () => void
}>()

const relevantMetrics = [
  { semantic: 'type', label: 'Type' },
  { semantic: 'status', label: 'Status' },
  { semantic: 'submitDate', label: 'Date' },
  { semantic: 'deadlineDate', label: 'Deadline' },
] as const

const relevantData = computed(() =>
  relevantMetrics.filter(
    ({ semantic }) => !!props.labeledColumns[semantic]?.value,
  ),
)

// Set card height (on narrow screens expanded card behaves as a sticky header)
const dataCardRef = ref<HTMLDivElement>()

const emit = defineEmits(['update:cardHeight'])
const resizeSelf = () => {
  if (dataCardRef.value) {
    emit('update:cardHeight', dataCardRef.value.clientHeight)
  }
}
onMounted(resizeSelf)
onUpdated(resizeSelf)
</script>

<template>
  <div
    ref="dataCardRef"
    :class="[
      'card rounded-none border-0 border-b bg-slate-100 pb-3 pt-4 md:rounded-none',
      isDataCardExpanded ? 'fixed-top' : '',
    ]"
  >
    <div class="grid grid-cols-12">
      <div
        v-if="isNewAppeal || !labeledColumns.appealId"
        class="col-span-12 mb-4 md:mb-1"
      >
        <h1 class="mb-1 mt-0 text-lg md:mb-2 md:mt-2 md:text-xl">
          Create New Appeal
        </h1>
        <div>
          <AppLink
            :to="{ name: 'edit' }"
            class="flex items-center gap-2 text-xs text-slate-600 transition-colors focus:text-amber-500 child-[.btn]:hover:bg-opacity-70 child-[.btn]:focus:bg-opacity-70 hover-parent:child-[span]:border-amber-500 hover-parent:child-[span]:text-amber-500 md:text-sm"
            title="Select Existing Appeal"
            @click="onOpenSelectForm"
          >
            <span
              class="border-b border-dotted border-slate-600 transition-colors"
              >Select Appeal</span
            >
            <button
              class="btn mt-px grid h-4 w-4 place-items-center rounded-full bg-amber-500 p-1 text-sm text-white md:h-5 md:w-5"
              tabindex="-1"
            >
              <ArrowPathIcon class="h-2 w-2 text-white md:h-3 md:w-3" />
            </button>
          </AppLink>
        </div>
      </div>
      <div
        v-else
        class="col-span-5 px-0 sm:col-span-6 md:col-span-12"
      >
        <p class="mb-1 pb-1 text-xs font-bold leading-none micro:text-sm">
          Appeal:
        </p>
        <h4 class="mb-2 mt-0 leading-none">
          <AppLink
            :to="{ name: 'edit' }"
            class="flex items-center gap-2 text-4xl font-bold text-slate-600 hover:text-amber-500 focus:text-amber-500 child-[.btn]:hover:bg-opacity-70 child-[.btn]:focus:bg-opacity-70"
            title="Обрати інший запит"
            @click="onOpenSelectForm"
          >
            {{ labeledColumns.appealId.value }}
            <button
              class="btn mb-px grid h-8 w-8 place-items-center rounded-full bg-amber-500 p-1 text-sm text-white"
              tabindex="-1"
            >
              <ArrowPathIcon class="h-5 w-5 text-white" />
            </button>
          </AppLink>
        </h4>
        <p class="pt-1 text-sm italic leading-none sm:text-base">
          {{
            labeledColumns.managedBy?.value
              ? 'Assigned to ' + labeledColumns.managedBy.value
              : 'Not Assigned'
          }}
        </p>
      </div>
      <div
        class="col-span-7 text-xs leading-none micro:text-sm sm:col-span-6 sm:text-base md:col-span-12 md:mt-6"
      >
        <div
          v-for="{ semantic, label } in relevantData"
          :key="semantic"
          class="mb-2 grid grid-cols-2"
        >
          <div class="pr-0">{{ label }}</div>
          <div class="pr-0">
            {{ labeledColumns[semantic]?.value || '–' }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="labeledColumns.text?.value || labeledColumns.tag?.value"
      class="card-footer mt-2 grid grid-cols-12 items-baseline gap-0.5 leading-none"
    >
      <div
        :class="[
          'md;col-span-12 md:mt-5 md:h-full md:whitespace-pre-wrap md:text-base',
          isDataCardExpanded
            ? 'max-vh-50 col-span-12 mt-1 break-words text-xs micro:text-sm'
            : 'col-span-8 h-6 overflow-hidden text-ellipsis whitespace-nowrap text-xs micro:text-sm md:col-span-9 lg:col-span-10',
        ]"
      >
        {{ labeledColumns.text?.value }}
      </div>
      <div
        :class="[
          'max-vh-50 col-span-12 py-1.5 text-sm sm:gap-1',
          isDataCardExpanded ? 'flex' : 'hidden md:flex',
        ]"
      >
        <span
          v-if="labeledColumns.tag?.value"
          class="my-2 mr-1 rounded-full bg-sky-800 px-2 pb-1 pt-0.5 text-xs tracking-wide text-white opacity-75 sm:text-sm"
        >
          {{ labeledColumns.tag.value }}
        </span>
      </div>
      <div
        class="col-span-4 px-1 text-sm micro:text-base sm:text-lg md:col-span-3 md:hidden lg:col-span-2"
      >
        <button
          type="button"
          class="btn-link"
          @click.prevent="onDataCardExpand"
        >
          <span>
            {{ isDataCardExpanded ? 'Collapse' : 'Expand' }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.max-vh-50 {
  max-height: 50vh;
}
</style>
