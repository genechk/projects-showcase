<script setup lang="ts">
import { ref } from 'vue'

import type { Tab } from '@dkc:types'

defineEmits(['update:activeTab'])
const props = defineProps<{
  tabs: Tab[] | readonly Tab[]
  activeTab: number
  showAll?: boolean
}>()
const showAll = props.showAll || ref(false)
</script>

<template>
  <div class="w-full px-micro pb-1 pt-3 micro:px-sm micro:py-4 sm:px-md">
    <ul
      v-show="!showAll"
      class="flex justify-center gap-2 micro:gap-4"
    >
      <li
        v-for="tab in tabs"
        :key="tab.number"
        class="col-span-3"
      >
        <button
          :class="[
            'rounded-md px-2 py-1 transition child-[span]:transition-colors micro:px-3 micro:py-2 micro:text-base',
            tab.number === activeTab
              ? 'cursor-default bg-slate-200 text-sm child-[span]:text-slate-600'
              : 'btn-link',
          ]"
          aria-current="page"
          type="button"
          :tabindex="tab.number === activeTab ? '-1' : '0'"
          @click.prevent="$emit('update:activeTab', tab.number)"
        >
          <span>
            {{ tab.label }}
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>
