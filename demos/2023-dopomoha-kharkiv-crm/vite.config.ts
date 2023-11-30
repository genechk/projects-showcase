import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import markdown from 'unplugin-vue-markdown/vite'
import { defineConfig } from 'vite'
import webfontDownload from 'vite-plugin-webfont-dl'

import { viteAssetsPlugin } from './plugins/viteAssetsPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Finlandica:ital,wght@0,400;0,600;1,400&display=swap',
    ]),
    viteAssetsPlugin(),
  ],

  base: './',

  build: {
    lib: {
      formats: ['es'],
      entry: ['src/main.ts'],
    },
  },

  resolve: {
    alias: [
      {
        find: '@dkc',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: '@dkc:assets',
        replacement: resolve(__dirname, 'src/assets'),
      },
      {
        find: '@dkc:components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '@dkc:composables',
        replacement: resolve(__dirname, 'src/composables'),
      },
      {
        find: '@dkc:content',
        replacement: resolve(__dirname, 'src/content'),
      },
      {
        find: '@dkc:pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
      {
        find: '@dkc:server',
        replacement: resolve(__dirname, 'src/server'),
      },
      {
        find: '@dkc:types',
        replacement: resolve(__dirname, 'src/types'),
      },
      {
        find: '@dkc:utils',
        replacement: resolve(__dirname, 'src/utils'),
      },
    ],
  },
})
