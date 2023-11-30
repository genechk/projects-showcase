<script setup lang="ts">
defineProps<{
  color?: 'primary' | 'neutral'
  size?: 'sm' | 'md'
}>()
</script>

<template>
  <span
    class="mx-0.5 inline-flex items-center justify-center whitespace-nowrap rounded-[0.25rem] border border-b-2"
    :class="{
      'min-h-[2.2em] min-w-[2.2em] px-2.5 text-base': size === 'md',
      'min-h-[1.6em] min-w-[1.6em] px-1.5 text-sm': !size || size === 'sm',
      'border-slate-200 bg-slate-100': !color || color === 'neutral',
      'border-primary-900 bg-primary-600 text-white': color === 'primary',
    }"
  >
    <slot></slot>
  </span>
</template>
