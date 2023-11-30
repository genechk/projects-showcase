import type { Tab } from '../types'

/** Tabs names */
export const tabList = [
  { label: 'Essentials', number: 0 },
  { label: 'Verification', number: 1 },
  { label: 'Delivery', number: 2 },
] as const satisfies readonly Tab[]
