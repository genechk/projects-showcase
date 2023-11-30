<script setup lang="ts">
import { useAppealsDataStore } from '@dkc:composables'

defineProps({
  isFixed: {
    type: Boolean,
    default: true,
  },
  isPristine: {
    type: Boolean,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: true,
  },
})
const { onSaveAppealData, onRejectAppealData } = useAppealsDataStore()
</script>

<template>
  <div
    :class="[
      'border-t border-slate-300 bg-slate-200 sm:rounded-t-md',
      isFixed ? 'container sticky bottom-0' : '',
    ]"
  >
    <div
      :class="[
        'mx-0 mt-0 flex justify-between gap-10 px-micro sm:px-sm',
        isFixed ? 'py-2.5' : 'py-3',
      ]"
    >
      <button
        type="button"
        class="btn-primary btn me-2 transition-all sm:py-2 sm:text-lg"
        :disabled="isPristine || isLoading"
        @click.prevent="onSaveAppealData"
      >
        <div
          v-show="isLoading"
          class="mr-4 flex items-center md:mr-5"
        >
          <span
            class="loader"
            role="status"
            aria-hidden="true"
          >
          </span>
        </div>
        Save Appeal
      </button>
      <button
        :disabled="isPristine || isLoading"
        type="button"
        class="btn btn-link ml-2 px-1 text-sm micro:text-base sm:text-lg"
        @click.prevent="
          () => onRejectAppealData && onRejectAppealData(isPristine)
        "
      >
        Discard
      </button>
    </div>
  </div>
</template>
