<script setup lang="ts">
defineProps<{
  complete: number
  total: number
  todo: number
  variant?: 'vertical' | 'horizontal'
}>()
</script>

<template>
  <div
    :class="[
      variant === 'horizontal'
        ? 'flex flex-col gap-4 rounded-xl bg-slate-100 p-6 lg:col-span-2 lg:grid lg:grid-cols-3 lg:gap-8'
        : [
            'flex flex-col gap-4 rounded-t-xl bg-slate-100 p-6',
            'xl:px-9 xl:pb-4 xl:pt-9',
          ],
    ]"
  >
    <div
      :class="[
        'grid grid-cols-[min-content_minmax(3.75rem,_1fr)]',
        (!variant || variant === 'vertical') && 'gap-x-8 xl:gap-x-12',
        variant === 'horizontal' && 'gap-x-4 xl:gap-x-6',
      ]"
    >
      <v-icon
        name="dashboard-stats-total"
        :filled="true"
        class="col-span-1 row-span-2 h-[3.75rem] w-[3.75rem] text-6xl xl:w-[4.5rem] xl:text-7xl"
      />
      <div class="col-span-1 -mt-1.5 self-start whitespace-nowrap">
        Total count:
      </div>
      <div
        class="col-span-1 mb-1.5 font-remissis text-3xl text-slate-600 xl:text-4xl"
      >
        {{ total }}
      </div>
    </div>
    <div
      :class="[
        'grid grid-cols-[min-content_minmax(3.75rem,_1fr)]',
        (!variant || variant === 'vertical') && 'gap-x-8 xl:gap-x-12',
        variant === 'horizontal' && 'gap-x-4 xl:gap-x-6',
      ]"
    >
      <v-icon
        name="dashboard-stats-completed"
        :filled="true"
        class="col-span-1 row-span-2 h-[3.75rem] w-[3.75rem] text-6xl xl:w-[4.5rem] xl:text-7xl"
      />
      <div class="col-span-1 -mt-1.5 self-start whitespace-nowrap">
        Completed:
      </div>
      <div
        class="col-span-1 mb-1.5 font-remissis text-3xl text-slate-600 xl:text-4xl"
      >
        {{ complete }}
      </div>
    </div>
    <div
      :class="[
        'grid grid-cols-[min-content_minmax(3.75rem,_1fr)]',
        (!variant || variant === 'vertical') && 'gap-x-8 xl:gap-x-12',
        variant === 'horizontal' && 'gap-x-4 xl:gap-x-6',
      ]"
    >
      <v-icon
        name="dashboard-stats-todo"
        :filled="true"
        class="col-span-1 row-span-2 h-[3.75rem] w-[3.75rem] text-6xl xl:w-[4.5rem] xl:text-7xl"
      />
      <div class="col-span-1 -mt-1.5 self-start whitespace-nowrap">To do:</div>
      <div
        class="col-span-1 mb-1.5 font-remissis text-3xl text-slate-600 xl:text-4xl"
      >
        {{ todo }}
      </div>
    </div>
  </div>
</template>
