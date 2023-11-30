<script setup lang="ts">
import XCirleIcon from '@heroicons/vue/20/solid/XCircleIcon'
import CheckIcon from '@heroicons/vue/20/solid/CheckIcon'
import ClipboardDocumentIcon from '@heroicons/vue/24/outline/ClipboardDocumentIcon'
import TrashOutlineIcon from '@heroicons/vue/24/outline/TrashIcon'
import { ref, computed, useModel } from 'vue'

import { useClipboard } from '@dkc:composables'
import { onError } from '@dkc:utils'
import draggable from 'vuedraggable'

import type { MapAppealData } from 'types'

const props = defineProps<{
  clearDeliveryRoute: () => void
  deliveryRoute: MapAppealData[]
  deleteFromDelivery: (request: MapAppealData) => void
}>()

const routeSummary = computed(() =>
  props.deliveryRoute.reduce((acc, { appealId, address, phone }) => {
    return `${acc}${appealId} — ${address} — ${phone}\n`
  }, ''),
)

const deliveryRoute = useModel(props, 'deliveryRoute')

/** Copy delivery summary to clipboard */
const { toClipboard } = useClipboard()
const isCopied = ref(false)
const copyRoute = async () => {
  try {
    await toClipboard(routeSummary.value)
    isCopied.value = true

    setTimeout(() => {
      isCopied.value = false
    }, 1000)
  } catch (err) {
    onError(err)
  }
}
</script>

<template>
  <h3 class="text-lg">Delivery route</h3>
  <div
    v-if="!deliveryRoute || !deliveryRoute.length"
    class="py-2"
  >
    No appeals to deliver
  </div>
  <template v-else>
    <draggable
      v-model="deliveryRoute"
      :animation="200"
      class="-ml-1 mb-2 grid gap-2 py-2"
      drag-class="opacity-0"
      ghost-class="bg-slate-200/50"
      handle=".handle"
      item-key="appealId"
      tag="ul"
    >
      <template #item="{ element: appeal }: { element: MapAppealData }">
        <li class="flex items-center justify-start gap-2 rounded-sm">
          <v-icon
            name="md-dragindicator-sharp"
            class="handle h-full w-4 cursor-move p-0 text-slate-400"
          ></v-icon>
          <summary class="list-none">
            <span
              class="mr-1 rounded-md bg-slate-500 px-1 py-0.5 text-xs text-white"
              >{{ appeal.appealId }}</span
            >
            {{ appeal.address }} –
            {{ appeal.phone }}
          </summary>
          <button
            class="ml-auto cursor-pointer rounded-full p-2 transition-colors"
            title="Remove from route"
            @click.prevent="() => deleteFromDelivery(appeal)"
          >
            <XCirleIcon
              class="h-5 w-5 cursor-pointer text-slate-400 transition-colors hover-parent:text-primary-600 focus-parent:text-primary-600"
            />
          </button>
        </li>
      </template>
    </draggable>
    <footer class="flex items-center gap-3">
      <button
        :class="[
          isCopied ? 'btn-danger flex-1' : 'btn-primary',
          'group px-3 py-2 text-base',
        ]"
        @click.prevent="copyRoute"
      >
        <template v-if="isCopied">
          <CheckIcon
            class="h-4 w-4 text-sky-900 transition-colors group-hover:text-red-500"
          />
          Copied
        </template>
        <template v-else>
          <ClipboardDocumentIcon class="h-4 w-4 text-white transition-colors" />
          Copy
        </template>
      </button>

      <button
        class="btn-danger flex gap-2 pl-3"
        @click.prevent="clearDeliveryRoute"
      >
        <TrashOutlineIcon
          class="h-4 w-4 text-cyan-700 transition-colors hover-parent:text-red-500/75 focus-parent:text-red-500"
        />
        Clear
      </button>
    </footer>
  </template>
</template>
