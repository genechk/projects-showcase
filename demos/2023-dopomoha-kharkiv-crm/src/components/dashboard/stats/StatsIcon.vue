<script setup lang="ts">
import DocumentIcon from '@heroicons/vue/24/outline/DocumentIcon'
import CheckBadgeIcon from '@heroicons/vue/24/outline/CheckBadgeIcon'
import TruckIcon from '@heroicons/vue/24/outline/TruckIcon'
import CakeIcon from '@heroicons/vue/24/outline/CakeIcon'
import BeakerIcon from '@heroicons/vue/24/outline/BeakerIcon'
import EllipsisIcon from '@heroicons/vue/24/outline/EllipsisHorizontalCircleIcon'
import UserIcon from '@heroicons/vue/24/outline/UserIcon'
import UserGroupIcon from '@heroicons/vue/24/outline/UserGroupIcon'
import SmileIcon from '@heroicons/vue/24/outline/FaceSmileIcon'
import FlagIcon from '@heroicons/vue/24/outline/FlagIcon'
import CollectionIcon from '@heroicons/vue/24/outline/Square2StackIcon'
import type { FunctionalComponent } from 'vue'

import type { Stats } from '@dkc:types'

const icons: Partial<Record<keyof Stats, FunctionalComponent>> = {
  notStarted: DocumentIcon,
  verified: CheckBadgeIcon,
  inProgress: TruckIcon,
  food: CakeIcon,
  medicine: BeakerIcon,
  other: EllipsisIcon,
  curated: UserIcon,
  eligible: UserGroupIcon,
  selfSufficient: SmileIcon,
  blackList: FlagIcon,
  verification: CollectionIcon,
}

const props = defineProps<{ iconName: keyof typeof icons }>()
</script>

<template>
  <component :is="icons[props.iconName]" />
</template>
