/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '@heroicons/vue/*' {
  const content: any
  export default content
}

declare module '@heroicons/vue/outline' {
  export { default as ArrowPathIcon } from '@heroicons/vue/solid/esm/ArrowPathIcon.js'
  // rest of outline icons
}

declare module '@heroicons/vue/solid' {
  export { default as ArrowPathIcon } from '@heroicons/vue/solid/esm/ArrowPathIcon.js'
  // rest of solid icons
}
