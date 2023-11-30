<script setup lang="ts">
import AppHeader, { type AppHeaderProps } from './AppHeader.vue'

const props = defineProps<AppHeaderProps>()
</script>

<template>
  <div class="flex h-full w-full min-w-page flex-col items-stretch bg-slate-50">
    <AppHeader v-bind="props" />
    <RouterView />
  </div>
</template>
