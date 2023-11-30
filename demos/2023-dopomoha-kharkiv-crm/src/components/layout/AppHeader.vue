<script setup lang="ts">
import { ref } from 'vue'
import { useFixedHeader } from 'vue-use-fixed-header'

import UserSnippet from './UserSnippet.vue'
import { AppLink } from '../ui'
import type { AppFeature } from '@dkc:types'

export type AppHeaderProps = {
  username: string
  avatarUrl: string
  features: readonly AppFeature[]
  logout: () => void
}

defineProps<AppHeaderProps>()

const isMenuExpanded = ref(false)
const onMenuExpand = () => (isMenuExpanded.value = !isMenuExpanded.value)

const headerRef = ref<HTMLDivElement | null>(null)
const { styles } = useFixedHeader(headerRef)
</script>

<template>
  <header
    ref="headerRef"
    class="min-h-14 sticky top-0 z-10 flex w-full items-stretch justify-between bg-white p-0 shadow shadow-neutral-300 md:gap-2"
    :class="
      isMenuExpanded &&
      'expanded max-md:flex-wrap child-[.menu]:max-md:flex child-[.menu]:max-md:w-full md:shadow'
    "
    :style="styles"
  >
    <div class="logo flex items-center px-2 py-0">
      <AppLink
        :to="{ name: 'dashboard' }"
        class="select-none focus:ring-0"
      >
        <v-icon
          name="dopomoha-logo-text-en"
          aria-label="Dopomoha.Kharkiv Logo"
          class="min-h-[3rem] w-24"
        />
      </AppLink>
    </div>
    <button
      :class="[
        'menu-button relative grid cursor-pointer place-items-center opacity-70 transition',
        'hover:bg-slate-100 hover:opacity-100 md:hidden',
        isMenuExpanded && 'active',
      ]"
      @click="onMenuExpand"
    >
      <span
        :class="[
          'menu-icon relative block h-0.5 w-7 rounded-lg bg-slate-700 transition',
          'before:absolute before:left-0 before:h-0.5 before:w-full before:rounded-lg before:bg-slate-700 before:transition before:ease-in before:content-[\'\']',
          'after:absolute after:left-0 after:h-0.5 after:w-full after:rounded-lg after:bg-slate-700 after:transition after:ease-in after:content-[\'\']',
          isMenuExpanded &&
            'bg-transparent before:translate-y-2 before:-rotate-45 after:-translate-y-2 after:rotate-45',
        ]"
      >
      </span>
    </button>
    <div
      class="menu hidden flex-col items-center child-[.expanded]:text-9xl md:flex md:flex-row md:gap-6"
    >
      <nav class="menu-items flex w-full flex-col md:flex-row">
        <AppLink
          v-for="feature in features"
          :key="feature.name"
          :to="feature.path"
          :class="[
            'mx-0 select-none px-6 py-3 focus:ring-0',
            'border-t border-dotted border-slate-500 border-opacity-100 last:border-b',
            'md:rounded-md md:border-none md:px-4 md:py-2',
            'md:ring-inset md:ring-slate-100 md:ring-offset-2 md:focus:ring-2',
            'focus:-outline-offset-4',
          ]"
          active-class="router-link-active cursor-default border-opacity-0 bg-slate-200 text-stone-600 shadow-inner shadow-slate-300 ring-0 md:shadow-none md:focus:ring-offset-4 md:focus:ring-offset-slate-100"
          @click="feature.action"
        >
          {{ feature.name }}
        </AppLink>
      </nav>
      <UserSnippet
        :username="username"
        :avatar-url="avatarUrl"
        :logout="logout"
      />
    </div>
  </header>
</template>

<style scoped lang="postcss">
.logo a {
  &.router-link-active,
  &.router-link-exact-active {
    cursor: default;
    opacity: 0.8;
  }

  &:not(.router-link-active),
  &:not(.router-link-exact-active) {
    &:hover {
      opacity: 0.8;
    }

    &:focus {
      opacity: 0.8;
    }
  }
}

.menu-button {
  min-width: 3rem;
  min-height: 2.5rem;
}

.menu-icon {
  &:before {
    bottom: 0.525rem;
  }

  &:after {
    top: 0.525rem;
  }
}
</style>
