<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

defineProps<{
  isControlPanelEnabled: boolean
  isSatelliteEnabled: boolean
  onToggleControlPanel: () => void
  onToggleSatelliteLayer: () => void
}>()
</script>

<template>
  <h3 class="text-lg">Customize Map</h3>
  <div class="flex flex-col gap-3 py-3">
    <SwitchGroup>
      <div
        class="flex cursor-pointer items-center justify-between text-lg"
        @click="onToggleControlPanel"
      >
        <SwitchLabel
          class="cursor-pointer"
          @click="onToggleControlPanel"
        >
          Enable control panel
        </SwitchLabel>
        <Switch
          :model-value="isControlPanelEnabled"
          :class="isControlPanelEnabled ? 'bg-cyan-600' : 'bg-slate-400'"
          class="border-px relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/75"
        >
          <span
            aria-hidden="true"
            :class="isControlPanelEnabled ? 'translate-x-4' : 'translate-x-0'"
            class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm shadow-slate-800/25 ring-0 transition duration-200 ease-in-out"
          ></span>
        </Switch>
      </div>
    </SwitchGroup>

    <SwitchGroup>
      <div
        class="flex cursor-pointer items-center justify-between text-lg"
        @click="onToggleSatelliteLayer"
      >
        <SwitchLabel
          class="cursor-pointer"
          @click="onToggleSatelliteLayer"
        >
          Satellite View
        </SwitchLabel>
        <Switch
          :model-value="isSatelliteEnabled"
          :class="isSatelliteEnabled ? 'bg-cyan-600' : 'bg-slate-400'"
          class="border-px relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/75"
        >
          <span
            aria-hidden="true"
            :class="isSatelliteEnabled ? 'translate-x-4' : 'translate-x-0'"
            class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm shadow-slate-800/25 ring-0 transition duration-200 ease-in-out"
          ></span>
        </Switch>
      </div>
    </SwitchGroup>
  </div>
</template>
