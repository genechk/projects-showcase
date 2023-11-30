import type { PropType } from 'vue'
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router'

import AppealsLayout from '@dkc:components/layout/AppealsLayout.vue'
import AppLayout from '@dkc:components/layout/AppLayout.vue'
import { AppFeature } from '@dkc:types'
import AppealsNavigatorPage from './AppealsNavigatorPage.vue'
import DashboardPage from './DashboardPage.vue'
import HomePage from './HomePage.vue'
import MapPage from './MapPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    props: {
      username: String,
      avatarUrl: String,
      logout: Function as PropType<() => void>,
      features: Array as PropType<AppFeature[]>,
    },
    children: [
      { path: '', component: HomePage },
      {
        path: 'appeals',
        component: AppealsLayout,
        children: [
          { path: '', redirect: { name: 'dashboard' } },
          { name: 'dashboard', path: 'dashboard', component: DashboardPage },
          { name: 'stats', path: 'dashboard/stats', component: DashboardPage },
          { name: 'guide', path: 'dashboard/guide', component: DashboardPage },
          { name: 'create', path: 'create', component: AppealsNavigatorPage },
          { name: 'edit', path: 'edit', component: AppealsNavigatorPage },
          { name: 'map', path: 'map', component: MapPage },
        ],
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
