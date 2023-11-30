<script setup lang="ts">
import { ref } from 'vue'
import ArrowRight from '@heroicons/vue/20/solid/ArrowRightIcon'
import { useRouter } from 'vue-router'

import type { Stats } from '@dkc:types'
import { AppLink } from '@dkc:components/ui'
import { useAppealsDataStore, useDashboardStore } from '@dkc:composables/stores'
import { GeneralStats } from './stats'
import { GuidePageLabel } from './guide'

defineProps<{
  isPending: boolean
  isError: boolean
  stats: Stats | null
}>()

const appealsStore = useAppealsDataStore()
const { onSelectGuideTab, onSelectStatsTab } = useDashboardStore()

const selectedAppealId = ref('')
const router = useRouter()
const onEditAppeal = () => {
  if (!selectedAppealId.value) return

  appealsStore.selectedAppealId = String(selectedAppealId.value)
  appealsStore.onSelectAppeal(selectedAppealId.value)
  router.push({ name: 'edit' })
}

const inputRef = ref<HTMLInputElement>()
</script>

<template>
  <main
    class="grid sm:mt-4 sm:gap-6 sm:overflow-y-auto lg:grid-cols-2 xl:gap-8"
  >
    <nav
      :class="[
        'bg-white px-6 py-3 text-lg',
        'sm:col-span-1 sm:mt-0 sm:rounded-xl sm:p-8 sm:shadow-lg',
        'xl:px-8',
      ]"
    >
      <h2 class="mb-6 text-2xl xl:text-3xl">Features</h2>
      <div class="flex flex-col items-stretch gap-6 xl:gap-8">
        <div
          :class="[
            'group grid h-[4.125rem] cursor-pointer grid-cols-[min-content_minmax(4.5rem,_1fr)] gap-x-5',
            'xl:h-[5rem] xl:grid-cols-[min-content_minmax(6rem,_1fr)] xl:gap-x-8',
          ]"
          @click="inputRef?.focus"
        >
          <v-icon
            name="dashboard-edit-icon"
            :filled="true"
            :class="[
              'col-span-1 row-span-2 h-[4.125rem] w-[4.125rem] text-7xl transition-opacity',
              'group-hover:opacity-80 group-focus:opacity-80',
              'xl:h-[5rem] xl:w-[5rem] xl:text-8xl',
            ]"
          />
          <h3
            :class="[
              'col-span-1 -mt-1.5 self-start pt-0 text-slate-600 transition-opacity',
              'group-hover:opacity-60 group-focus:opacity-60',
              'xl:mb-[0.3125rem] xl:text-2xl',
            ]"
          >
            Edit Appeal
          </h3>
          <form class="col-span-1 flex xl:self-end">
            <input
              ref="inputRef"
              v-model="selectedAppealId"
              aria-label="Appeal Serial Number"
              type="number"
              class="rounded-left form-input h-10 w-full max-w-[15rem] xl:h-12"
              placeholder="Type in serial number"
            />
            <button
              class="grid h-10 w-10 place-items-center rounded-r-md bg-primary-600 p-2 transition-all enabled:hover:bg-opacity-80 disabled:opacity-40 xl:h-12 xl:w-14"
              type="submit"
              :disabled="!selectedAppealId"
              @click.prevent="onEditAppeal"
            >
              <ArrowRight class="h-6 w-6 text-white" />
            </button>
          </form>
        </div>

        <AppLink
          :to="{ name: 'create' }"
          :class="[
            'group grid h-[4.125rem] grid-cols-[min-content_minmax(4.5rem,_1fr)] gap-x-5',
            'xl:h-[5rem] xl:grid-cols-[min-content_minmax(6rem,_1fr)] xl:gap-x-8',
          ]"
          @click="appealsStore.onCreateAppeal"
        >
          <v-icon
            name="dashboard-create-icon"
            :filled="true"
            :class="[
              'col-span-1 row-span-2 h-[4.125rem] w-[4.125rem] text-7xl transition-opacity',
              'group-hover:opacity-80 group-focus:opacity-80',
              'xl:h-[5rem] xl:w-[5rem] xl:text-8xl',
            ]"
          />
          <h3
            :class="[
              'col-span-1 -mt-1.5 text-slate-600 transition-colors',
              'group-hover:text-primary-600 group-focus:text-primary-600',
              'xl:text-2xl',
            ]"
          >
            Add Appeal
          </h3>
          <p
            class="text-md col-span-1 self-end overflow-visible text-base leading-6 xl:text-lg xl:leading-7"
          >
            Create a new appeal <br />and&nbsp;save it&nbsp;to&nbsp;database
          </p>
        </AppLink>
        <AppLink
          :to="{ name: 'map' }"
          :class="[
            'group grid h-[4.125rem] grid-cols-[min-content_minmax(4.5rem,_1fr)] gap-x-5',
            'xl:h-[5rem] xl:grid-cols-[min-content_minmax(6rem,_1fr)] xl:gap-x-8',
          ]"
        >
          <v-icon
            name="dashboard-map-icon"
            :filled="true"
            :class="[
              'col-span-1 row-span-2 h-[4.125rem] w-[4.125rem] text-7xl transition-opacity',
              'group-hover:opacity-80 group-focus:opacity-80',
              'xl:h-[5rem] xl:w-[5rem] xl:text-8xl',
            ]"
          />
          <h3
            :class="[
              'col-span-1 -mt-1.5 text-slate-600 transition-colors',
              'group-hover:text-primary-600 group-focus:text-primary-600',
              'xl:text-2xl',
            ]"
          >
            Map & Routes
          </h3>
          <p
            class="text-md col-span-1 mb-1.5 self-end text-base leading-6 xl:mb-2 xl:text-lg xl:leading-7"
          >
            Review appeals on the map<br />and create a&nbsp;delivery route
          </p>
        </AppLink>
      </div>
    </nav>
    <section
      :class="[
        'my-0 flex flex-col items-stretch bg-white p-6 text-lg',
        'sm:col-span-1 sm:rounded-xl sm:p-8 sm:shadow-lg',
        'xl:px-8 xl:pb-8',
      ]"
    >
      <h2 class="mb-1.5 text-2xl xl:mb-6 xl:text-3xl">Stats</h2>
      <div
        v-if="isPending || (!stats && !isError)"
        class="loader grid place-items-center rounded-t-xl bg-slate-100"
      ></div>
      <div
        v-else-if="!stats || isError"
        class="grid place-items-center rounded-t-xl bg-slate-100"
      >
        Failed to load stats
      </div>
      <GeneralStats
        v-else
        :class="[
          'flex flex-col gap-4 rounded-t-xl bg-slate-100 p-6',
          'xl:px-9 xl:pb-4 xl:pt-9',
        ]"
        :complete="stats.complete"
        :todo="stats.todo"
        :total="stats.total"
      />
      <AppLink
        :to="{ name: 'stats' }"
        :class="[
          'group grid h-12 place-items-center rounded-b-xl bg-slate-200 text-base transition-colors',
          'enabled:hover:bg-opacity-80 enabled:focus:bg-opacity-80',
          'xl:h-16 xl:text-xl',
        ]"
        @click="onSelectStatsTab"
      >
        <span
          class="border-b border-dotted border-slate-500 transition group-hover:border-primary-600 group-hover:text-primary-600 group-focus:border-primary-600 group-focus:text-primary-600"
          >Full statistics</span
        >
      </AppLink>
    </section>
    <section
      :class="[
        'mt-0 bg-white p-6 pb-3 text-base leading-7',
        'sm:col-span-1 sm:rounded-xl sm:p-8 sm:shadow-lg',
        'xl:px-8 xl:text-xl xl:leading-8',
      ]"
    >
      <h2 class="mb-3 text-2xl xl:mb-5 xl:text-3xl">About this CRM</h2>
      <p class="mb-4 h-fit xl:mb-5">
        This is the interface for processing Dopomoha.Kharkiv Foundation’s
        appeals for Humanitarian Aid. It will allow you to edit information
        about appeals that already are registered in the database; to create and
        process new appeals; to review appeals location on the
        <GuidePageLabel to="/appeals/map">Map</GuidePageLabel> and plan routes
        based on their geography.
      </p>
      <p class="h-fit">
        Gradually
        <AppLink
          :to="{ name: 'guide' }"
          @click="() => onSelectGuideTab('plan')"
        >
          more features will be added</AppLink
        >. If you see a bug, come up with an idea for the new feature or decide
        to give us a feedback on existing ones, be sure to
        <a
          target="_blank"
          href="https://genechk.github.io/projects-showcase/contacts/"
        >
          contact the developer</a
        >.
      </p>
    </section>
    <nav
      :class="[
        'mt-0 bg-white p-6 text-base',
        'sm:col-span-1 sm:rounded-xl sm:p-8 sm:shadow-lg',
        'xl:px-8 xl:text-xl xl:leading-8',
      ]"
    >
      <h2 class="mb-3 text-2xl xl:mb-5 xl:text-3xl">Getting Started</h2>
      <ol
        class="text-link-list -ml-px flex list-inside list-decimal flex-col gap-6"
      >
        <li>
          <AppLink
            :to="{ name: 'guide' }"
            class="border-b border-dotted border-slate-500 hover:border-primary-600 focus:border-primary-600"
            @click.prevent="() => onSelectGuideTab('create')"
          >
            Creating New Appeals
          </AppLink>
        </li>
        <li>
          <AppLink
            :to="{ name: 'guide' }"
            class="border-b border-dotted border-slate-500 hover:border-primary-600 focus:border-primary-600"
            @click.prevent="() => onSelectGuideTab('edit')"
          >
            Editing Existing Appeals
          </AppLink>
        </li>
        <li>
          <AppLink
            :to="{ name: 'guide' }"
            class="border-b border-dotted border-slate-500 hover:border-primary-600 focus:border-primary-600"
            @click.prevent="() => onSelectGuideTab('map')"
          >
            Using Map to Work With Appeals
          </AppLink>
        </li>
        <li>
          <AppLink
            :to="{ name: 'guide' }"
            class="border-b border-dotted border-slate-500 hover:border-primary-600"
            @click.prevent="() => onSelectGuideTab('delivery')"
          >
            Composing and Sharing Routes
          </AppLink>
        </li>
      </ol>
    </nav>
  </main>
</template>
