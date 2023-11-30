import plugin from 'tailwindcss/plugin'

const btnMixin = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1rem',

  cursor: 'pointer',
  userSelect: 'none',
  borderRadius: '0.375rem',

  transitionProperty:
    'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '300ms',
}

export default plugin(
  ({ addBase, addComponents, addVariant, matchVariant, theme }) => {
    addBase({
      h1: {
        fontSize: theme('fontSize.3xl'),
        marginTop: theme('spacing[2]'),
        marginBottom: theme('spacing[2]'),
      },
      [`@media (min-width: ${theme('screens.lg')})`]: {
        h1: {
          fontSize: theme('fontSize.4xl'),
        },
      },
    })

    addComponents({
      '.card': {
        width: theme('width.full'),
        maxWidth: theme('maxWidth.3xl'),
        padding: theme('padding.5'),
        paddingBottom: theme('padding.12'),
        marginTop: theme('margin.0'),
        fontSize: theme('fontSize.lg'),
        lineHeight: '1.75rem/* 28px */',
        borderRadius: theme('borderRadius.xl'),
        backgroundColor: theme('backgroundColor.white'),
        boxShadow: theme('boxShadow.lg'),
      },
      [`@media (min-width: ${theme('screens.micro')})`]: {
        '.card': {
          padding: theme('padding.6'),
        },
        '.btn-primary': {
          width: 'auto',
        },
      },
      [`@media (min-width: ${theme('screens.sm')})`]: {
        '.card': {
          padding: theme('padding.8'),
          marginTop: theme('margin.4'),
        },
        '.btn-primary': {
          padding: '0.75rem 2rem',
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
        },
      },
      '.btn': btnMixin,
      '.btn:disabled, .btn-login:disabled, .btn-primary:disabled': {
        cursor: 'default',
        opacity: '0.4',
      },
      '.btn:hover:enabled': {
        '--tw-bg-opacity': '0.8',
      },

      '.btn-login': {
        ...btnMixin,
        '--tw-bg-opacity': '1',
        backgroundColor: 'rgb(252 211 77 / var(--tw-bg-opacity))',
        '--tw-text-opacity': '1',
        color: 'rgb(23 23 23 / var(--tw-text-opacity))',
      },

      '.btn-primary': {
        ...btnMixin,
        width: '100%',
        paddingLeft: '1.5rem',
        '--tw-bg-opacity': '1',
        backgroundColor: 'rgb(237 69 105 / var(--tw-bg-opacity))',
        borderWidth: '1px',
        borderColor: 'transparent',
        '--tw-text-opacity': '1',
        color: 'rgb(255 255 255 / var(--tw-text-opacity))',
      },

      '.btn-primary:hover:enabled': {
        '--tw-bg-opacity': '0.8',
        '--tw-shadow':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        '--tw-shadow-colored':
          '0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)',
        boxShadow:
          'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
      },

      '.btn-primary:focus': {
        '--tw-bg-opacity': '0.9',
        '--tw-shadow':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        '--tw-shadow-colored':
          '0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)',
        boxShadow:
          'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
      },

      '.btn-danger': {
        ...btnMixin,
        borderWidth: '1px',
        '--tw-border-opacity': '1',
        borderColor: 'rgb(14 116 144 / var(--tw-border-opacity))',
        '--tw-bg-opacity': '1',
        backgroundColor: 'rgb(255 255 255 / var(--tw-bg-opacity))',
        '--tw-text-opacity': '1',
        color: 'rgb(21 94 117 / var(--tw-text-opacity))',
      },

      '.btn-danger:focus': {
        '--tw-shadow':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        '--tw-shadow-colored':
          '0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)',
        boxShadow:
          'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
        '--tw-border-opacity': '1',
        borderColor: 'rgb(237 69 105 / var(--tw-border-opacity))',
        '--tw-bg-opacity': '1',
        '--tw-text-opacity': '1',
        color: 'rgb(237 69 105 / var(--tw-text-opacity))',
      },

      '.btn-danger:hover:enabled': {
        '--tw-shadow':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        '--tw-shadow-colored':
          '0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)',
        boxShadow:
          'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
        '--tw-border-opacity': '0.75',
        borderColor: 'rgb(237 69 105 / var(--tw-border-opacity))',
        '--tw-bg-opacity': '1',
        '--tw-text-opacity': '0.75',
        color: 'rgb(237 69 105 / var(--tw-text-opacity))',
      },

      '.btn-link': {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
      },
      '.btn-link:focus': {
        '--tw-ring-offset-shadow':
          'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
        '--tw-ring-shadow':
          'var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
        boxShadow:
          'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
      },

      '.btn-link > span': {
        paddingBottom: '1px',
        borderBottomWidth: '1px',
        borderStyle: 'dotted',
        '--tw-border-opacity': '1',
        borderColor: 'rgb(51 65 85 / var(--tw-border-opacity))',
      },

      '.btn-link:focus > span, .btn-link:hover:enabled': {
        '--tw-border-opacity': '1',
        borderColor: 'rgb(237 69 105 / var(--tw-border-opacity))',
        '--tw-text-opacity': '1',
        color: 'rgb(237 69 105 / var(--tw-text-opacity))',
      },

      '.btn-dropdown': {
        position: 'relative',
      },

      '.btn-dropdown:before': {
        content: '""',
        borderBottom: '3px solid white',
        borderRight: '3px solid white',

        display: 'block',
        height: '0.75rem',
        width: '0.75rem',
        '--tw-rotate': '45deg',
        position: 'absolute',
        left: '50%',
        top: '0.75rem',
        '--tw-translate-x': '-50%',
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      },
    })

    addVariant('hover-parent', ':hover > &')
    addVariant('focus-parent', ':focus > &')

    matchVariant('child', value => {
      return `& > ${value}`
    })

    matchVariant('not', value => {
      return `:not(${value}) > &`
    })
  },
)
