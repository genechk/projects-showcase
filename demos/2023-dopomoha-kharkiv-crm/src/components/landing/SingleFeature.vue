<script setup lang="ts">
defineProps<{ icon: string }>()
</script>

<template>
  <div
    :class="[
      'group grid cursor-default grid-cols-[min-content_minmax(4.5rem,_1fr)] items-center gap-x-6',
      'xl:grid-cols-[min-content_minmax(6rem,_1fr)] xl:gap-x-8',
    ]"
  >
    <v-icon
      :name="icon"
      :class="[
        'mb-2 h-[2rem] w-[2rem] text-white transition-transform',
        'sm:mb-2.5 sm:h-[2.5rem] sm:w-[2.5rem]',
        'group-hover:scale-110',
        'xl:h-[3.5rem] xl:w-[3.5rem]',
      ]"
    ></v-icon>
    <h3
      :class="[
        'col-span-1 -mt-1.5 text-lg text-white transition-transform',
        'sm:text-xl',
        'group-hover:translate-x-1',
        'xl:text-2xl',
      ]"
    >
      <slot></slot>
    </h3>
  </div>
</template>
