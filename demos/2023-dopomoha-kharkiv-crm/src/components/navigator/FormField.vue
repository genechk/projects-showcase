<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  ref,
  toRefs,
  watch,
  type PropType,
} from 'vue'

import { ComboBox as Combo } from '../ui'
import { useUIStateStore, useModelWrapper } from '@dkc:composables'
import type { AppealAPIData, InputFieldLayout } from '@dkc:content'

const emit = defineEmits<(event: string) => void>()
const props = defineProps({
  value: { type: [String], required: true, default: '' },
  layout: {
    type: String as PropType<InputFieldLayout>,
    default: 'full-width-input',
  },
  semantic: { type: String as PropType<keyof AppealAPIData>, required: true },
  name: { type: String, required: true },
  type: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  tabs: {
    type: Array as PropType<number[] | readonly number[]>,
    default: () => [],
  },
  showAll: { type: Boolean, default: false },
  options: {
    type: Array as PropType<string[] | readonly string[]>,
    default: () => [],
  },
  isValidated: { type: Boolean, default: false },
  isRequired: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: false },
  isNewAppeal: { type: Boolean, required: true },
  activeTab: { type: Number, required: true },
})

const isTextarea = computed(() => {
  return props.layout === 'textarea' || props.layout === 'appeal-text'
})

const isFullwidth = computed(() => {
  return isTextarea.value || props.layout.includes('full-width')
})

const isCombobox = computed(() => {
  return props.layout.includes('select')
})

const textareaRef = ref<HTMLTextAreaElement>()

const { onModifyInput } = useUIStateStore()
const currentText = useModelWrapper<string, 'value'>(
  props,
  emit,
  'value',
  value => {
    onModifyInput()

    return value
  },
)

const autoresize = async () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
    await nextTick()
    const maxHeight = 500
    const scrollHeight = textareaRef.value.scrollHeight + 10
    const height = scrollHeight < maxHeight ? scrollHeight : maxHeight
    textareaRef.value.style.height = height + 'px'
  }
}

const { activeTab, showAll } = toRefs(props)
onMounted(autoresize)
watch([currentText, activeTab, showAll], autoresize)

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  currentText.value = target.value
}

const onComboInput = (event: string) => {
  currentText.value = event
}
</script>

<template>
  <div
    v-show="tabs.includes(activeTab) || showAll"
    class="mb-1 grid grid-cols-12 items-center py-1 lg:py-1.5"
  >
    <label
      :class="[
        'lg:text-lg',
        isFullwidth
          ? 'col-span-12 mb-1'
          : 'col-span-5 micro:col-span-4 sm:col-span-3 md:col-span-4',
      ]"
      :for="semantic"
    >
      {{ name }}:
    </label>
    <div
      :class="[
        'grid',
        isFullwidth
          ? 'col-span-12'
          : 'col-span-7 micro:col-span-8 sm:col-span-9 md:col-span-8',
      ]"
    >
      <textarea
        v-if="isTextarea"
        :id="semantic"
        ref="textareaRef"
        type="text"
        :disabled="isDisabled && !isNewAppeal"
        :name="semantic"
        :class="[layout, 'form-input w-full']"
        :value="currentText"
        @input="onInput"
      ></textarea>

      <Combo
        v-else-if="isCombobox"
        :disabled="isDisabled && !isNewAppeal"
        :semantic="semantic"
        :options="options"
        :layout="layout"
        :is-validated="isValidated"
        :value="currentText"
        @update:value="onComboInput"
      />
      <input
        v-else
        :id="semantic"
        :type="type || 'text'"
        :disabled="isDisabled && (semantic === 'appealId' || !isNewAppeal)"
        :name="semantic"
        :class="[layout, 'form-input w-full']"
        :value="currentText"
        @input="onInput"
      />
    </div>
  </div>
</template>
../composables/useModelWrapper
