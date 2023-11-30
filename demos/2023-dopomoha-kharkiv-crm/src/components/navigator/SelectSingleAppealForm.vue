<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'

import { useModelWrapper } from '@dkc:composables'
import type { InteractionHandler } from '@dkc:types'

const emit = defineEmits<(event: string) => void>()
const props = defineProps({
  isAppealOpen: {
    type: Boolean,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: true,
  },
  isCreating: {
    type: Boolean,
    required: true,
  },
  selectedAppealId: {
    type: String,
    required: true,
  },
  currentAppealId: {
    type: String,
    default: '',
  },
  selectError: {
    type: Object as PropType<{ isError: boolean; message: string }>,
    default: () => ({}),
  },
  onReject: {
    type: Function as PropType<InteractionHandler>,
    default: () => () => {},
  },
  onConfirm: {
    type: Function as PropType<(appealId: string) => void>,
    default: () => () => {},
  },
  onCreate: {
    type: Function as PropType<InteractionHandler>,
    default: () => () => {},
  },
})

const selectedAppealId = useModelWrapper<string, 'selectedAppealId'>(
  props,
  emit,
  'selectedAppealId',
  value => String(value),
)

const isInputDisabled = computed(
  () =>
    !props.selectedAppealId ||
    props.isLoading ||
    props.isCreating ||
    (props.isAppealOpen && props.selectedAppealId === props.currentAppealId),
)
const isCreateAvailable = ref(true)

const onSelectSingleAppeal = () => props.onConfirm(selectedAppealId.value)
const onCreateAppeal = () => props.onCreate()
</script>

<template>
  <div>
    <form id="select-form-long">
      <div class="mb-2 pb-2">
        <div class="flex w-full flex-col gap-1 sm:gap-2">
          <label
            class="pr-1 text-slate-400 sm:text-lg"
            for="select-serial-number"
          >
            Serial number:
          </label>
          <input
            id="select-serial-number"
            v-model.number="selectedAppealId"
            name="select-serial-number"
            :class="[
              selectError.isError && 'is-invalid',
              'w-full rounded-sm sm:text-xl',
            ]"
            type="number"
            role="searchbox"
          />
          <div
            v-if="selectError.isError"
            class="invalid-feedback"
          >
            {{ selectError.message }}
          </div>
        </div>
      </div>
      <nav
        class="flex flex-col gap-1 pt-1 micro:flex-row micro:items-center micro:justify-between"
      >
        <button
          type="submit"
          class="btn w-full bg-primary-800 px-6 text-white enabled:hover:shadow micro:w-auto sm:px-8 sm:py-3 sm:text-xl"
          :disabled="isInputDisabled"
          @click.prevent="onSelectSingleAppeal"
        >
          <div
            v-show="isLoading"
            class="mr-4 flex items-center md:mr-5"
          >
            <span
              class="loader"
              role="status"
              aria-hidden="true"
            ></span>
          </div>
          Edit Appeal Details
        </button>
        <button
          v-if="isAppealOpen"
          type="button"
          class="text-muted btn btn-link me-1 ms-2 px-0 sm:text-lg"
          @click.prevent="onReject"
        >
          <span
            class="link-default border-b border-dotted border-slate-900 border-opacity-90 hover:border-primary-500"
          >
            Back
          </span>
        </button>
        <button
          v-else-if="isCreateAvailable"
          type="button"
          class="btn me-1 ms-2 px-0 micro:w-auto sm:px-8 sm:py-3 sm:text-xl"
          @click.prevent="onCreateAppeal"
        >
          <span
            v-show="isCreating"
            class="link-default border-b border-dotted border-slate-900 border-opacity-90 hover:border-primary-500"
            role="status"
            aria-hidden="true"
          ></span>
          <span
            class="link-default border-b border-dotted border-slate-900 border-opacity-90 hover:border-primary-500"
          >
            Create New Appeal
          </span>
        </button>
      </nav>
    </form>
  </div>
</template>
../composables/useModelWrapper
