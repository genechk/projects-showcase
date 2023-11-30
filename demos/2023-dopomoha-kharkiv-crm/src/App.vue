<script setup lang="ts">
import './assets/css/main.css'
import './assets/css/animations.css'
import { useAppealsDataStore, useUserStore } from './composables'
import type { AppFeature } from './types'

const appealsDataStore = useAppealsDataStore()
const features = [
  {
    path: { name: 'edit' },
    name: 'Edit',
    action: appealsDataStore.editExistingAppeal,
  },
  {
    path: { name: 'create' },
    name: 'New Appeal',
    action: appealsDataStore.createNewAppeal,
  },
  {
    path: { name: 'map' },
    name: 'Map',
    action: () => {},
  },
] as const satisfies readonly AppFeature[]

const userStore = useUserStore()
</script>

<template>
  <div class="flex h-full w-full min-w-page flex-col items-stretch bg-slate-50">
    <RouterView
      :username="userStore.user.name"
      :avatar-url="userStore.user.image"
      :logout="userStore.logout"
      :features="features"
    />
  </div>
</template>
