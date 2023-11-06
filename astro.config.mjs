import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://genechk.github.io',
  base: '/projects-showcase',
  integrations: [
    react(),
    vue(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
