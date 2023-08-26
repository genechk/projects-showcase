/** @type {import("prettier").Config} */
export default {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
  ],
  pluginSearchDirs: false,
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  singleAttributePerLine: true,
  htmlWhitespaceSensitivity: 'css',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
