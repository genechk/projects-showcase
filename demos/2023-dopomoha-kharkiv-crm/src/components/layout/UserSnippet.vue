<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import UserCircleIcon from '@heroicons/vue/20/solid/UserCircleIcon'

import { AppLink } from '../ui'

defineProps<{
  username: string
  avatarUrl: string
  logout: () => void
}>()
</script>

<template>
  <Popover v-slot="{ open }">
    <div class="relative grid grid-cols-2 p-0 md:flex md:h-full">
      <PopoverButton
        class="my-0 flex h-full flex-grow cursor-default select-none items-center gap-2 border-r border-dotted border-slate-500 py-0 pl-4 pr-8 md:flex-grow-0 md:cursor-pointer md:border-none md:bg-slate-100 md:py-3 md:pr-3"
      >
        <img
          v-if="avatarUrl"
          :src="avatarUrl"
          alt=""
          class="h-6 w-6 rounded-full"
        />
        <UserCircleIcon
          v-else
          class="m-0 h-5 w-5 p-0 text-slate-600 opacity-60"
        />
        <p
          class="text-ellipsis whitespace-nowrap py-4 leading-5 opacity-60 md:py-1 md:text-sm md:leading-normal"
        >
          {{ username }}
        </p>
      </PopoverButton>
      <PopoverPanel
        static
        as="div"
        :class="[open && 'open', 'panel']"
      >
        <AppLink
          class="grid h-full place-items-center p-2 md:p-3"
          to="/"
          @click="logout"
        >
          <span class="flex h-full items-center gap-1">
            <v-icon name="outline-logout" />
            Logout
          </span>
        </AppLink>
      </PopoverPanel>
    </div>
  </Popover>
</template>

<style scoped lang="postcss">
a {
  @apply select-none;
}

.panel {
  @apply z-30 grid place-items-stretch;
  @apply md:absolute md:top-full md:hidden md:w-full;
  @apply md:bg-white md:text-sm md:shadow-lg;
}

.open {
  @apply md:grid;
}
</style>
