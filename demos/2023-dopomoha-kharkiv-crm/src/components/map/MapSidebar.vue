<script setup lang="ts">
import XMarkIcon from '@heroicons/vue/24/outline/XMarkIcon'
import {
  Tab,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  TransitionRoot,
} from '@headlessui/vue'
import { useModel } from 'vue'

import { spreadsheetColumns } from '@dkc:server/mockData'
import { AppealDetails, DeliveryRoute, MapSettings } from '@dkc:components/map'
import type { MapAppealData } from '@dkc:types'

const props = defineProps<{
  deliveryRoute: MapAppealData[]
  isControlPanelEnabled: boolean
  isSatelliteEnabled: boolean
  isSidebarOpen: boolean
  onAddToDelivery: (appeal?: MapAppealData) => void
  onChangeTab: (index: number) => void
  onClearDeliveryRoute: () => void
  onCloseSidebar: () => void
  onDeleteFromDelivery: (appeal: MapAppealData) => void
  onToggleControlPanel: () => void
  onToggleSatelliteLayer: () => void
  selectedAppeal: MapAppealData | undefined
  selectedSidebarTab: number
}>()

const deliveryRoute = useModel(props, 'deliveryRoute')
</script>

<template>
  <TransitionRoot
    as="aside"
    class="relative z-10 flex w-full flex-col items-stretch gap-4 overflow-hidden overflow-y-auto rounded-none bg-slate-50 p-5 pb-0 pr-0 sm:max-w-md sm:shadow-md"
    enter="transition-transform"
    enter-from="translate-y-full sm:translate-y-0 sm:translate-x-full"
    enter-to="translate-y-0 sm:translate-x-0"
    leave="transition-transform"
    leave-from="translate-y-0 sm:translate-x-0"
    leave-to="translate-y-full sm:translate-y-0 sm:translate-x-full"
    :show="isSidebarOpen && !!selectedAppeal"
  >
    <div class="absolute right-6 top-6 cursor-pointer">
      <XMarkIcon
        class="h-6 w-6 text-slate-700 transition-colors hover:text-primary-600"
        @click="onCloseSidebar"
      />
    </div>
    <TabGroup
      :selected-index="selectedSidebarTab"
      @change="onChangeTab"
    >
      <TabList class="flex gap-2 micro:gap-4">
        <Tab v-slot="{ selected }">
          <div
            :class="[
              'flex gap-x-1.5 rounded-md px-2 py-1 transition child-[span]:transition-colors micro:px-3 micro:py-2 micro:text-base',
              selected
                ? 'cursor-default bg-slate-200 child-[span]:pb-px child-[span]:text-slate-600'
                : 'btn-link child-[span]:pb-0',
            ]"
          >
            <span>Appeal</span>
          </div>
        </Tab>
        <Tab v-slot="{ selected }">
          <div
            :class="[
              'flex items-center gap-x-1.5 rounded-md px-2 py-1 transition child-[span]:transition-colors micro:px-3 micro:py-2 micro:text-base',
              selected
                ? 'cursor-default bg-slate-200 child-[span]:pb-px child-[span]:text-slate-600'
                : 'btn-link child-[span]:pb-0',
            ]"
          >
            <span>Route</span>
            <div
              v-if="deliveryRoute && deliveryRoute.length"
              class="inline-grid h-5 w-5 place-items-center rounded-full bg-primary-600 p-0 font-remissis text-xxs not-italic text-white"
            >
              {{ deliveryRoute.length }}
            </div>
          </div>
        </Tab>
        <Tab v-slot="{ selected }">
          <div
            :class="[
              'rounded-md px-2 py-1 transition child-[span]:transition-colors micro:px-3 micro:py-2 micro:text-base',
              selected
                ? 'cursor-default bg-slate-200 child-[span]:text-slate-600'
                : 'btn-link',
            ]"
          >
            <span>Customize</span>
          </div>
        </Tab>
      </TabList>
      <TabPanels
        id="tab-panels"
        class="overflow-y-auto pb-5 pr-5"
      >
        <TabPanel tabindex="-1">
          <AppealDetails
            :presentation-data="spreadsheetColumns"
            :selected-appeal="selectedAppeal"
            :on-add-to-delivery="onAddToDelivery"
            :change-tab="onChangeTab"
          />
        </TabPanel>
        <TabPanel tabindex="-1">
          <DeliveryRoute
            v-model:delivery-route="deliveryRoute"
            :clear-delivery-route="onClearDeliveryRoute"
            :delete-from-delivery="onDeleteFromDelivery"
          />
        </TabPanel>
        <TabPanel tabindex="-1">
          <MapSettings
            :is-control-panel-enabled="isControlPanelEnabled"
            :is-satellite-enabled="isSatelliteEnabled"
            :on-toggle-control-panel="onToggleControlPanel"
            :on-toggle-satellite-layer="onToggleSatelliteLayer"
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </TransitionRoot>
</template>
