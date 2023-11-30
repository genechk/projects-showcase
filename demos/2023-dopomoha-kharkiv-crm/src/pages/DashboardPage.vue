<script setup lang="ts">
import { toRefs } from 'vue'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'

import { DashboardTab, GuideTab, StatsTab } from '@dkc:components/dashboard'
import { apiConstants } from '@dkc:content'
import { useDashboardStore } from '@dkc:composables'
import type { Stats } from '@dkc:types'

const dashboardStore = useDashboardStore()
const { onChangeTab, onScrollToTop } = dashboardStore
const { isScreenSmallOrWider, selectedTab, topScrollRef } =
  toRefs(dashboardStore)

const { name } = useRoute()

// Sync opened tab to the route on page reload
switch (name) {
  case 'stats':
    selectedTab.value = 1
  case 'guide':
    selectedTab.value = 2
  case 'dashboard':
  default:
    selectedTab.value = 0
}

const {
  isFetching,
  error,
  data: stats,
} = useFetch<string>(apiConstants.appealsStatsURL).json<Stats>()
</script>

<template>
  <TabGroup
    as="section"
    :vertical="isScreenSmallOrWider"
    :selected-index="selectedTab"
    :class="[
      'grid gap-2',
      'sm:h-full sm:grid-cols-6 sm:items-start sm:gap-3 sm:overflow-y-auto sm:overflow-x-hidden sm:pl-4',
      'md:pl-6',
      'lg:grid-cols-8',
    ]"
    @change="onChangeTab"
  >
    <TabList
      :class="[
        'flex w-full justify-center gap-2 px-micro pb-1 pt-3',
        'micro:gap-4 micro:px-sm micro:text-base',
        'sm:col-span-2 sm:flex-col sm:items-start sm:px-md sm:pt-4',
      ]"
    >
      <Tab
        v-slot="{ selected }"
        as="template"
      >
        <button
          :disabled="selected"
          :class="[
            'rounded-md px-2 py-1 transition child-[span]:transition-colors',
            'micro:px-3 micro:py-2 micro:text-base',
            'md:px-3.5 md:py-1.5 md:text-lg',
            selected
              ? 'cursor-default bg-slate-200 text-sm child-[span]:text-slate-600'
              : 'btn-link',
          ]"
          @click="onScrollToTop"
        >
          <span> Dashboard </span>
        </button>
      </Tab>
      <Tab
        v-slot="{ selected }"
        as="template"
      >
        <button
          :disabled="selected"
          :class="[
            'rounded-md px-2 py-1 transition child-[span]:transition-colors',
            'micro:px-3 micro:py-2 micro:text-base',
            'md:px-3.5 md:py-1.5 md:text-lg',
            selected
              ? 'cursor-default bg-slate-200 text-sm child-[span]:text-slate-600'
              : 'btn-link',
          ]"
          @click="onScrollToTop"
        >
          <span> Stats </span>
        </button>
      </Tab>
      <Tab
        v-slot="{ selected }"
        as="template"
      >
        <button
          :disabled="selected"
          :class="[
            'rounded-md px-2 py-1 transition child-[span]:transition-colors',
            'micro:px-3 micro:py-2 micro:text-base',
            'md:px-3.5 md:py-1.5 md:text-lg',
            selected
              ? 'cursor-default bg-slate-200 text-sm child-[span]:text-slate-600'
              : 'btn-link',
          ]"
          @click="onScrollToTop"
        >
          <span> Guide </span>
        </button></Tab
      >
    </TabList>
    <div
      :class="[
        'flex w-full flex-row items-start pb-8',
        'sm:col-span-4 sm:h-full sm:overflow-y-auto sm:pr-4',
        'md:pr-6',
        'lg:col-span-6 lg:pb-10',
      ]"
    >
      <div
        ref="topScrollRef"
        class="h-0 w-0"
      ></div>
      <TabPanels :class="['w-full max-w-3xl', 'xl:max-w-5xl']">
        <TabPanel as="template">
          <DashboardTab
            :is-error="!!error"
            :is-pending="isFetching"
            :stats="stats"
          />
        </TabPanel>
        <TabPanel as="template">
          <StatsTab
            :is-error="!!error"
            :is-pending="isFetching"
            :stats="stats"
          />
        </TabPanel>
        <TabPanel as="template">
          <GuideTab />
        </TabPanel>
      </TabPanels>
    </div>
  </TabGroup>
</template>
