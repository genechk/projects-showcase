<script setup lang="ts">
import PlusCircleIcon from '@heroicons/vue/24/outline/PlusCircleIcon'
import type { MapAppealData } from 'types'

type ColumnsMin = { name: string; semantic: string }

defineProps<{
  onAddToDelivery: (appeal?: MapAppealData) => void
  changeTab: (index: number) => void
  presentationData: ColumnsMin[] | readonly ColumnsMin[]
  selectedAppeal: MapAppealData | undefined
}>()
</script>

<template>
  <div class="flex flex-col items-stretch gap-4 overflow-y-auto">
    <h3 class="font-remissis text-lg">
      Appeal {{ selectedAppeal?.appealId || 'isn’t selected' }}
    </h3>

    <template v-if="!!selectedAppeal">
      <div>
        <button
          class="btn-primary btn flex w-auto items-center gap-2 py-2 pl-3 pr-4 text-sm"
          :disabled="
            !selectedAppeal || !!selectedAppeal.isAppealInDeliveryRoute
          "
          @click="() => onAddToDelivery()"
        >
          <PlusCircleIcon class="h-6 w-6 text-white" />
          {{
            selectedAppeal?.isAppealInDeliveryRoute
              ? 'Appeal added to route'
              : 'Add to route'
          }}
        </button>
      </div>

      <template
        v-for="{ name, semantic } in presentationData"
        :key="semantic"
      >
        <div
          v-if="selectedAppeal[semantic as keyof MapAppealData]"
          class="grid grid-cols-[6rem_1fr] gap-5"
        >
          <div class="font-bold">
            {{ name }}
          </div>
          <div class="max-w-md whitespace-pre-wrap break-words">
            {{ selectedAppeal[semantic as keyof MapAppealData] || '—' }}
          </div>
        </div>
      </template>
    </template>
  </div>
</template>
