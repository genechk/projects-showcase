<script setup lang="ts">
import DocumentIcon from '@heroicons/vue/24/outline/DocumentIcon'

import { AppLink } from '@dkc:components/ui'

defineProps<{
  to?: string
}>()
</script>

<template>
  <component
    :is="!!to ? AppLink : 'span'"
    :to="to"
    :class="[
      'mx-0.5 inline-flex items-baseline justify-center gap-1 whitespace-nowrap rounded-[0.25rem] border border-b-2',
      'min-h-[1.6em] min-w-[1.6em] px-1.5 text-sm',
      'border-slate-200 bg-slate-100 text-slate-700',
    ]"
  >
    <DocumentIcon class="h-[0.8125rem] w-[0.8125rem] self-center" />
    <slot></slot>
  </component>
</template>
