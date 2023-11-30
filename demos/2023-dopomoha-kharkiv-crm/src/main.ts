import { OhVueIcon } from 'oh-vue-icons'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { setIcons } from '@dkc:assets/icons'
import App from './App.vue'
import { router } from './pages'
import { createServer } from './server'

import './style.css'

createServer()
setIcons()
const pinia = createPinia()

export default createApp(App)
  .use(pinia)
  .use(router)
  .component('v-icon', OhVueIcon)
  .mount('#app')
