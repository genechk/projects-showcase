<script setup lang="ts">
import { toRefs } from 'vue'
import HomeIcon from '@heroicons/vue/20/solid/HomeIcon'

import { useDashboardStore } from '@dkc:composables'
import { AppLink } from '../ui'
import { GuideButton, GuidePageLabel } from './guide'

const dashboardStore = useDashboardStore()
const { onSelectMainTab } = dashboardStore
const {
  createScrollRef,
  editScrollRef,
  mapScrollRef,
  deliveryScrollRef,
  planScrollRef,
} = toRefs(dashboardStore)
</script>

<template>
  <main class="rounded-xl bg-white p-6 pb-12 text-lg shadow-lg sm:mt-4 sm:p-8">
    <h1 class="mb-4 mt-1 text-2xl leading-snug md:mt-2 md:text-3xl">
      Getting Started
    </h1>
    <div class="mb-3 flex items-center">
      <img
        class="hidden aspect-auto w-32 select-none sm:visible"
        src="/dopomoha-logo-icon.png"
        alt="Допо.Лого"
      />
      <p class="md:text-md mb-4 text-base leading-7">
        This is the interface for processing Dopomoha.Kharkiv Foundation’s
        appeals for Humanitarian Aid. It will allow you to edit information
        about appeals that already are registered in the database; creating and
        process new appeals; review appeals location on the map and plan routes
        based on their geography.
      </p>
    </div>
    <div class="mb-6">
      <h3
        ref="createScrollRef"
        class="mb-1.5"
      >
        1. Adding New Appeals
      </h3>
      <p class="md:text-md mb-4 text-base italic leading-7">
        Go to
        <GuidePageLabel to="/appeals/create">Create Appeal</GuidePageLabel> page
        → Add appeal’s full text → Fill&nbsp;in&nbsp;the remaining known data →
        Press <GuideButton color="primary">Save Appeal</GuideButton> button.
      </p>
      <p class="md:text-md mb-4 text-base leading-7">
        Freshly created appeal is assigned the first avaiable
        <em>serial number</em>. Numbers are assigned sequentially.
        We&nbsp;determine if&nbsp;number is&nbsp;available by&nbsp;checking the
        appeal’s full text. If&nbsp;it’s&nbsp;missing, all&nbsp;other fields are
        ignored in&nbsp;favor of&nbsp;the new appeal.
      </p>
    </div>

    <div class="mb-6">
      <h3
        ref="editScrollRef"
        class="mb-1.5"
      >
        2. Editing Existing Appeals
      </h3>
      <p class="md:text-md mb-4 text-base italic leading-7">
        Enter the appeal’s
        <GuideButton
          class="bg-slate-200 font-mono text-xs not-italic lg:text-sm"
          >Serial Number</GuideButton
        >
        on the
        <GuidePageLabel to="/appeals/dashboard">Dashboard</GuidePageLabel>
        or <GuidePageLabel to="/appeals/edit">Edit Appeal</GuidePageLabel>
        page → Update data as&nbsp;needed → Press
        <GuideButton color="primary">Save Appeal</GuideButton>
        button.
      </p>
      <p class="md:text-md mb-4 text-base leading-7">
        Edited fields will be&nbsp;updated in&nbsp;the database only after your
        appeal is saved.
      </p>
    </div>

    <div class="mb-6">
      <h3
        ref="mapScrollRef"
        class="mb-1.5"
      >
        3. Working With Map
      </h3>
      <p class="md:text-md mb-4 text-base leading-7">
        The <GuidePageLabel to="/appeals/map">Map</GuidePageLabel> page
        by&nbsp;default displays all&nbsp;appeals that have valid coordinates
        in&nbsp;them. Their map pins will have different colors and icons,
        depending on&nbsp;the appeal’s completion status.
      </p>
    </div>

    <div class="mb-6">
      <h3
        ref="deliveryScrollRef"
        class="mb-1.5"
      >
        4. Composing and Sharing Routes
      </h3>
      <p class="md:text-md mb-4 text-base leading-7">
        Clicking on&nbsp;any appeal on&nbsp;the
        <GuidePageLabel to="/appeals/map">Map</GuidePageLabel> will reveal its
        context menu, which has an
        <GuideButton color="primary">Add to route</GuideButton> button. Use it
        to add that appeal to&nbsp;the current route. It&nbsp;also will open the
        <GuideButton>Route Tab</GuideButton> in&nbsp;the sidebar.
      </p>

      <p class="md:text-md mb-4 text-base leading-7">
        By&nbsp;default the route will contain only the basic data about appeals
        in&nbsp;it,&nbsp;required for delivery: their <em>serial numbers</em>,
        <em>addresses</em> and <em>phone numbers</em>. Adding any other
        information to&nbsp;the route is&nbsp;currently not supported.
      </p>

      <p class="md:text-md mb-4 text-base leading-7">
        You can add appeals to the route in&nbsp;any order you want, just don’t
        forget to&nbsp;change their order later. Rule of&nbsp;thumb
        is&nbsp;to&nbsp;keep the route as&nbsp;short and tight as&nbsp;possible.
        If&nbsp;you see a&nbsp;lot&nbsp;of&nbsp;outliers, try grouping them into
        another routel. If&nbsp;that’s not possible, just sort them all together
        at&nbsp;the beginning or&nbsp;the end of&nbsp;the route, and drop
        in&nbsp;a&nbsp;short comment that warns the delivering volunteer about
        them.
      </p>

      <p class="md:text-md mb-4 text-base leading-7">
        After you finish preparing your route, just use the
        <GuideButton color="primary">Copy</GuideButton> button to&nbsp;copy and
        paste route data to&nbsp;your chat with volunteer. Be&nbsp;sure
        to&nbsp;include any additional information they should know about this
        delivery.
      </p>

      <p class="md:text-md mb-4 text-base leading-7">
        <strong>That’s&nbsp;it, you’re done!</strong> Nice work, and hopefully
        done much quicker than previously.
      </p>
    </div>

    <div class="mb-6 mt-10">
      <h2
        ref="planScrollRef"
        class="mb-3.5 text-2xl font-bold leading-snug"
      >
        Future Plans
      </h2>
      <p class="md:text-md mb-4 text-base leading-7">
        Gradually, more features will be added:
      </p>
      <ul
        class="mb-4 flex list-inside list-none flex-col gap-2.5 pl-6 text-base leading-7"
      >
        <li
          class="relative before:absolute before:-left-5 before:top-1/2 before:mt-px before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-700"
        >
          <p>
            Integration with
            <a
              target="_blank"
              href="https://t.me/dopomoha_kharkiv_bot"
              >Chat bot</a
            >
          </p>
        </li>
        <li
          class="relative before:absolute before:-left-5 before:top-1/2 before:mt-px before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-700"
        >
          <p>Advanced search in appeals</p>
        </li>
        <li
          class="relative before:absolute before:-left-5 before:top-1/2 before:mt-px before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-700"
        >
          <p>
            Filters by appeal type and status on the
            <GuidePageLabel to="/appeals/map">Map</GuidePageLabel>
          </p>
        </li>
        <li
          class="relative before:absolute before:-left-5 before:top-1/2 before:mt-px before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-700"
        >
          <p>Improved workflow for curated appeals</p>
        </li>
      </ul>
      <p class="md:text-md mb-4 text-base leading-7">
        If&nbsp;you see a&nbsp;bug, come up&nbsp;with an&nbsp;idea for the new
        feature or&nbsp;decide to&nbsp;give us a feedback on existing ones,
        be&nbsp;sure to&nbsp;<a
          target="_blank"
          href="https://genechk.github.io/projects-showcase/contacts/"
          >contact the developer</a
        >.
      </p>
    </div>
    <AppLink
      :to="{ name: 'dashboard' }"
      class="group btn-link mb-6 mt-12 flex flex-col items-center gap-1.5 child-[span]:duration-100 md:hidden"
      @click="onSelectMainTab"
    >
      <HomeIcon
        class="h-5 text-slate-400 transition-colors group-hover:text-primary-600"
      />
      <span>Back to Dashboard</span>
    </AppLink>
  </main>
</template>
