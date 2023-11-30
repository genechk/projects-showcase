import { readFileSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import type { Plugin } from 'vite'

const currentPath = dirname(fileURLToPath(import.meta.url))
const assetsContent = readFileSync(resolve(currentPath, './Assets.astro'))

export const viteAssetsPlugin = (): Plugin => {
  return {
    name: 'vite-assets-plugin',
    async writeBundle(options) {
      if (!options.dir) return

      //       const assetsContent = `---
      // import './style.css'
      // import './webfonts.css'
      // ---

      // <style is:global>
      //   @font-face {
      //     font-family: 'Remissis';
      //     src:
      //       local('Remissis'),
      //       url(./fonts/remissis-semibold/RemissisSb-Regular.otf) format('opentype');
      //   }
      // </style>
      // `.trim()

      // Create an index.vue file with the contents of index.html
      const assetsPathAstro = resolve(options.dir, 'Assets.astro')
      writeFileSync(assetsPathAstro, assetsContent)

      console.log(`👌 dist/Assets.astro`)
    },
  }
}
