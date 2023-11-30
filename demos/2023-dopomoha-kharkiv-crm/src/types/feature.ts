import { RouteLocationRaw } from 'vue-router'

import type { InteractionHandler } from './appeals'

export type AppFeature = {
  path: RouteLocationRaw
  name: string
  action: InteractionHandler
}
