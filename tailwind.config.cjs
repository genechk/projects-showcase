const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

const themeColors = {
  primary: colors.slate[900],
  'primary-content': colors.white,
  secondary: '#3385D7',
  'secondary-content': colors.white,
  accent: colors.pink[600],
  'accent-content': colors.white,
  neutral: colors.slate[200],
  'neutral-content': colors.slate[600],
  'base-100': colors.slate[900],
  'base-content': colors.slate[400],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        link: {
          DEFAULT: themeColors.secondary,
          light: themeColors.accent,
          100: '#B4F2FF',
          200: '#74C1FF',
          300: '#67B6FF',
          400: '#449BF2',
          500: themeColors.secondary,
          600: '#006AB9',
          700: '#006AB9',
          800: '#00387E',
          900: '#002262',
        },
      },
      typography: () => ({
        min: {
          css: {
            '--tw-prose-headings': `${themeColors.primary} !important`,
            '--tw-prose-body': `${themeColors.primary} !important`,
            '--tw-prose-links': `${themeColors.secondary} !important`,
            '--tw-prose-links-hover': themeColors.accent,
          },
        },
        DEFAULT: {
          css: {
            fontFamily: [
              'Lato',
              'ui-sans-serif',
              'system-ui',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              '"Noto Sans"',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
            ].join(', '),

            fontWeight: 400,

            a: {
              fontWeight: 'inherit',
              transition: 'all ease-in 200ms',
              textDecoration: 'none',

              '&:hover': {
                color: 'var(--tw-prose-links-hover)',
              },
            },

            h1: { fontWeight: 300 },
            h2: { fontWeight: 300 },
            h3: { fontWeight: 300 },
          },
        },
      }),
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwind-scrollbar'),

    plugin(function ({ matchVariant }) {
      matchVariant('child', value => {
        return `& > ${value}`
      })

      matchVariant('not', value => {
        return `:not(${value}) > &`
      })
    }),
  ],

  daisyui: {
    themes: [
      {
        min: {
          ...themeColors,

          '--rounded-box': '0', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '0', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '300ms', // duration of animation when you click on button
          '--animation-input': '200ms', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'none', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '2px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0', // border radius of tabs
          '--navbar-padding': '0',
        },
      },
    ],
  },
}
