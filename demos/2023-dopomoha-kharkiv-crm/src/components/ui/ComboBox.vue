<script setup lang="ts">
import { computed, nextTick, ref, type PropType } from 'vue'

const emit = defineEmits(['update:value'])
const props = defineProps({
  options: {
    type: Array as PropType<string[] | readonly string[]>,
    required: true,
  },
  semantic: { type: String, required: true },
  value: { type: String, default: '' },
  layout: { type: String, required: true },
  isValidated: { type: Boolean, default: false },
})

const currentText = computed({
  get: () => props.value,
  set: (newVal: string) => emit('update:value', newVal),
})

const isComboExpanded = ref(false)

// Fixes toggle bug
const isManual = ref(false)
const isErrorDisplayed = ref(false)
const focusTarget = ref<EventTarget | null>()
const autosuggest = ref<HTMLInputElement>()
const button = ref<HTMLButtonElement>()

const selectableOptions = computed(() => {
  const maxMatches = 10
  let matches = 0

  return isManual.value
    ? props.options
    : props.options.filter((option = '') => {
        if (
          option.toLowerCase().includes(currentText.value.toLowerCase()) &&
          matches < maxMatches
        ) {
          matches++
          return true
        }

        return false
      })
})

const validate = () => !props.options.includes(currentText.value)
const expand = () => (isComboExpanded.value = true)
const collapse = () => (isComboExpanded.value = false)
const toggle = () => (isComboExpanded.value = !isComboExpanded.value)
const focus = async () => {
  await nextTick()
  autosuggest.value?.focus()
}

const onInput = () => {
  expand()
  isManual.value = false
}

const onBlur = async () => {
  const isButtonClicked = focusTarget.value === button.value

  await nextTick()
  setTimeout(() => {
    if (props.isValidated) isErrorDisplayed.value = validate()
    if (!isButtonClicked && focusTarget.value !== autosuggest.value) {
      collapse()
    }
    focusTarget.value = null
  }, 150)
}

const onButtonClick = async () => {
  isManual.value = true
  await nextTick()
  toggle()
  focus()
}

const onFocusIn = (event: FocusEvent) => {
  focusTarget.value = event.target
}

const selectOption = (option: string) => {
  onBlur()
  currentText.value = option
  if (props.isValidated) isErrorDisplayed.value = validate()
  focus()
}
</script>

<template>
  <div
    class="relative"
    @focusout="onBlur"
  >
    <input
      :id="semantic"
      ref="autosuggest"
      v-model="currentText"
      :name="semantic"
      :class="[
        layout,
        'form-input w-full',
        isErrorDisplayed ? 'border-danger' : '',
      ]"
      type="text"
      @input.prevent="onInput"
      @focus="onFocusIn"
    />
    <button
      ref="button"
      class="btn btn-dropdown absolute bottom-0 right-0 top-0 w-10 rounded-l-none border-y border-r border-stone-400 bg-slate-200 bg-opacity-0 opacity-40 before:border-slate-600 hover:bg-opacity-100 hover:opacity-60"
      type="button"
      tabindex="-1"
      @focus="onFocusIn"
      @click.prevent="onButtonClick"
    ></button>
    <ul
      v-show="isComboExpanded && selectableOptions.length"
      class="absolute top-full z-10 flex max-h-72 min-w-full flex-col items-stretch overflow-y-auto bg-white p-3 pr-6 shadow-md"
    >
      <li
        v-for="option in selectableOptions"
        :key="option"
      >
        <a
          class="block py-2"
          href="#"
          @click.prevent="selectOption(option)"
        >
          {{ option }}
        </a>
      </li>
    </ul>
  </div>
</template>
