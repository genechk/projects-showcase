export const inputFieldLayouts = {
  id: 'id-input',
  text: 'appeal-text',
  tag: 'appeal-tag',
  textarea: 'textarea',
  inputHalf: 'half-width-input',
  inputFull: 'full-width-input',
  selectHalf: 'half-width-select',
  selectFull: 'full-width-select',
} as const

export type InputFieldLayout =
  (typeof inputFieldLayouts)[keyof typeof inputFieldLayouts]
