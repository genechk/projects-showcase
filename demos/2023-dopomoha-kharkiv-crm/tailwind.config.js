const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      screens: {
        micro: '450px',
      },
      minWidth: {
        ...defaultTheme.minWidth,
        page: '320px',
      },
      height: {
        ...defaultTheme.height,
        17: '4.25rem',
        18: '4.5rem',
      },
      padding: {
        ...defaultTheme.padding,
        micro: '1.25rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
        '1/4h': '25vh',
        '1/2h': '50vh',
        '1/4w': '25vw',
        '1/2w': '50vw',
      },
      margin: {
        ...defaultTheme.margin,
        '1/4h': '25vh',
        '1/2h': '50vh',
        '1/4w': '25vw',
        '1/2w': '50vw',
      },
      colors: {
        primary: {
          DEFAULT: '#F3869D',
          100: '#FAD1D9',
          200: '#F8B9C7',
          400: '#F6A2B4',
          500: '#F3869D',
          600: '#EF5D7B',
          800: '#ED4569',
          900: '#E81743',
        },
      },
      fontSize: {
        ...defaultTheme.fontSize,
        xxs: ['0.5rem', '1'],
      },
      container: {
        screens: {
          ...defaultTheme.container.screens,
        },
      },
      fontFamily: {
        sans: ['Finlandica', defaultTheme.fontFamily.sans],
        remissis: ['Remissis', defaultTheme.fontFamily.sans],
      },
    },
    transitionDuration: {
      ...defaultTheme.transitionDuration,
      DEFAULT: '300ms',
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('./plugins/tailwindUIPlugin/tailwindUIPlugin'),
  ],
}
