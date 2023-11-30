<script setup lang="ts">
import { RouterLink, useLink, RouterLinkProps } from 'vue-router'

const props = defineProps<
  RouterLinkProps & {
    inactiveClass?: string
    disabled?: boolean
  }
>()

// `props` contains `to` and any other prop that can be passed to <router-link>
const { navigate, href, isActive } = useLink(props)

const isExternalLink =
  typeof props.to === 'string' && props.to.startsWith('http')
</script>

<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="href"
    target="_blank"
  >
    <slot></slot>
  </a>
  <RouterLink
    v-else
    v-bind="$props"
    custom
  >
    <a
      v-bind="$attrs"
      :href="href"
      :class="isActive ? activeClass : inactiveClass"
      :disabled="disabled || isActive"
      @click="navigate"
    >
      <slot></slot>
    </a>
  </RouterLink>
</template>
