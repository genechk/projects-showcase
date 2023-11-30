<script setup lang="ts">
import { AppLink } from '@dkc:components/ui'
import { SingleFeature } from '@dkc:components/landing'
import AppDescription from '@dkc:content/docs/AppDescription.md'
</script>

<template>
  <div
    :class="[
      'relative flex min-h-screen w-full min-w-[360px] flex-col items-center overflow-hidden',
      'bg-gradient-to-br from-indigo-500 to-green-500 bg-fixed',
      'md:grid md:grid-cols-2',
    ]"
  >
    <section
      class="z-0 grid h-screen place-items-center items-center p-8 sm:h-full"
    >
      <div class="grid place-items-center">
        <div class="flex flex-col gap-3 sm:gap-4">
          <h1
            class="relative my-4 select-none border-y-2 border-dotted border-white/50 py-4 text-[clamp(1.5rem,2vw+0.75rem,3.75rem)] text-white opacity-80"
          >
            Start Volunteering Today
            <v-icon
              class="absolute left-0 top-0 aspect-auto h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-[30deg] select-none self-start"
              name="dopomoha-logo-icon-white"
              aria-label="logo"
            />
          </h1>
          <SingleFeature icon="la-hands-helping-solid">
            Get Involved
          </SingleFeature>
          <SingleFeature icon="la-edit"> Create & Edit Appeals </SingleFeature>
          <SingleFeature icon="md-querystats-outlined">
            Review Statistics
          </SingleFeature>
          <SingleFeature icon="la-map-marked-alt-solid">
            Manage Aid Delivery
          </SingleFeature>
          <AppLink
            :class="[
              'btn btn-login mt-4 w-auto rounded-full font-remissis text-lg',
              'text-sky-600 hover:bg-yellow-300 hover:text-sky-500',
              'sm:mt-3 sm:text-2xl',
            ]"
            :to="{ name: 'dashboard' }"
          >
            Get Started
          </AppLink>
        </div>
      </div>
    </section>
    <section class="z-1 relative h-screen w-full overflow-y-auto 2xl:p-4">
      <div
        :class="[
          'mx-auto flex h-full w-full flex-col overflow-y-auto bg-white/60 pt-8',
          '2xl:max-w-3xl 2xl:rounded-3xl 2xl:shadow 2xl:shadow-slate-500/25',
        ]"
      >
        <header class="mb-3 px-8 text-2xl text-slate-600 lg:text-3xl">
          <h2>Appeals for Humanitarian Aid CRM</h2>
        </header>
        <main class="flex-1 overflow-y-auto px-8">
          <div
            :class="[
              'prose prose-lg prose-h3:mb-1 prose-h4:mb-0 prose-p:first:mt-0',
              'prose-code:mx-px prose-code:whitespace-nowrap prose-code:rounded-full prose-code:bg-slate-700 prose-code:px-2 prose-code:pb-0.5 prose-code:pt-px prose-code:font-normal prose-code:text-slate-100 prose-code:before:content-[] prose-code:after:content-[]',
              'prose-ul:pl-3.5 prose-li:marker:text-slate-700/25',
              'prose-a:text-sky-700 prose-a:no-underline',
            ]"
          >
            <AppDescription />
          </div>
        </main>
        <footer class="bg-white/30 px-8 pb-2.5 pt-1.5">
          <AppLink
            class="btn btn-link text-base text-sky-800 hover:border-primary-800 child-[span]:border-sky-800 child-[span]:transition-colors child-[span]:hover-parent:border-primary-800"
            :to="{ name: 'dashboard' }"
          >
            <span> Got it, show me the app already </span>
          </AppLink>
        </footer>
      </div>
    </section>
  </div>
</template>
