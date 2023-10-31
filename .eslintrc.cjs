module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:astro/recommended', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        'no-unused-vars': 'error',
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-unused-vars': 'error',
      },
    },
    {
      ecmaVersion: '2015',
      files: ['*.mjs'],
      parserOptions: { sourceType: 'module' },
    },
  ],
}
