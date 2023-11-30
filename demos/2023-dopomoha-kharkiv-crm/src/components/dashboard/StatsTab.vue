<script setup lang="ts">
import HomeIcon from '@heroicons/vue/20/solid/HomeIcon'
import { ref, onMounted } from 'vue'

import { GeneralStats, StatsIcon } from './stats'
import { useDashboardStore } from '@dkc:composables/stores'
import { keysIn } from '@dkc:types'
import type { Stats } from '@dkc:types'

defineProps<{
  stats: Stats | null
  isPending: boolean
  isError: boolean
}>()

const { onSelectMainTab } = useDashboardStore()

const statsUpdateDate = ref(
  new Date().toLocaleDateString('uk', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }),
)

onMounted(async () => {
  // Solves timezone issue with SSR
  statsUpdateDate.value = new Date().toLocaleDateString('uk', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
})

type Labels = Partial<Record<keyof Stats, string>>
const statsByStatus: Labels = {
  notStarted: 'Not started',
  verified: 'Verified',
  inProgress: 'In progress',
}

const statsByCategory: Labels = {
  food: 'Food',
  medicine: 'Medicine',
  other: 'Other',
}

const statsByType: Labels = {
  curated: 'Curated',
  eligible: 'Aid Eligible',
  selfSufficient: 'Self Sufficient',
  blackList: 'Blacklist',
  verification: 'In Verification',
}
</script>

<template>
  <main
    :class="[
      'max-w-3xl rounded-xl bg-white p-6 pb-12 text-lg shadow-lg',
      'sm:mt-4 sm:p-8',
      'xl:max-w-4xl',
    ]"
  >
    <h1 class="mb-1.5 mt-1 text-2xl leading-snug md:mt-2 md:text-3xl">
      Appeals Stats
    </h1>
    <p class="mb-6 text-base font-bold tracking-wide text-neutral-400">
      Most recent update:
      <span class="font-remissis">{{ statsUpdateDate }}</span>
    </p>
    <div
      v-if="isPending || (!stats && !isError)"
      class="loader grid place-items-center rounded-xl bg-slate-100"
    ></div>
    <div
      v-else-if="!stats || isError"
      class="grid place-items-center rounded-t-xl bg-slate-100"
    >
      Failed to load page
    </div>
    <div
      v-else
      class="grid gap-8 lg:grid-cols-2"
    >
      <GeneralStats
        class="flex flex-col gap-4 rounded-t-xl bg-slate-100 p-6 lg:col-span-2 lg:flex-row lg:gap-8"
        :complete="stats.complete"
        :todo="stats.todo"
        :total="stats.total"
        variant="horizontal"
      />

      <div
        class="rounded-xl border-2 border-dashed border-black p-5 lg:order-1 lg:col-span-1"
      >
        <h3 class="-mt-9 mb-2.5 text-xl">
          <span class="-ml-0.5 border-2 border-white bg-white">
            By completion status
          </span>
        </h3>
        <div
          v-for="statusKey in keysIn(statsByStatus)"
          :key="statusKey"
          class="grid grid-cols-12 items-center gap-4 py-2.5 font-remissis"
        >
          <div class="col-span-2 grid items-center">
            <StatsIcon
              :icon-name="statusKey"
              class="w-6"
            />
          </div>
          <p class="col-span-7 text-base">{{ statsByStatus[statusKey] }}:</p>
          <p class="col-span-3 text-base">{{ stats[statusKey] }}</p>
        </div>
      </div>

      <div
        class="rounded-xl border-2 border-dashed border-black p-5 lg:order-3 lg:col-span-1"
      >
        <h3 class="-mt-9 mb-2.5 text-xl">
          <span class="-ml-0.5 border-2 border-white bg-white">
            By category
          </span>
        </h3>
        <div
          v-for="categoryKey in keysIn(statsByCategory)"
          :key="categoryKey"
          class="grid grid-cols-12 items-center gap-4 py-2.5 font-remissis"
        >
          <div class="col-span-2 grid items-center">
            <StatsIcon
              :icon-name="categoryKey"
              class="w-6"
            />
          </div>
          <p class="col-span-7 text-base">
            {{ statsByCategory[categoryKey] }}:
          </p>
          <p class="col-span-3 text-base">{{ stats[categoryKey] }}</p>
        </div>
      </div>

      <div
        class="rounded-xl border-2 border-dashed border-black p-5 md:order-2 md:col-span-1 md:row-span-2"
      >
        <h3 class="-mt-9 mb-2.5 text-xl">
          <span class="-ml-0.5 border-2 border-white bg-white">
            By Eligibility</span
          >
        </h3>
        <div
          v-for="appealTypeKey in keysIn(statsByType)"
          :key="appealTypeKey"
          class="grid grid-cols-12 items-center gap-4 py-2.5 font-remissis"
        >
          <div class="col-span-2 grid items-center">
            <StatsIcon
              :icon-name="appealTypeKey"
              class="w-6"
            />
          </div>
          <p class="col-span-7 text-base">{{ statsByType[appealTypeKey] }}:</p>
          <p class="col-span-3 text-base">{{ stats[appealTypeKey] }}</p>
        </div>
      </div>
    </div>
    <a
      href=""
      class="group btn-link mb-6 mt-12 flex flex-col items-center gap-1.5 child-[span]:duration-100 md:hidden"
      @click.prevent="onSelectMainTab"
    >
      <HomeIcon
        class="h-5 text-slate-400 transition-colors group-hover:text-primary-600"
      />
      <span>Back to Dashboard</span>
    </a>
  </main>
</template>
