module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', 'tailwind.config.js'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'comma-dangle': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
  },
}
