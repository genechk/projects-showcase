import { computed, type SetupContext, type WritableComputedRef } from 'vue'

/** Helper function that creates proxy computed prop to use with v-model */
export const useModelWrapper = <TValue, TPropKey extends string = string>(
  props: Record<TPropKey, TValue> & Record<string, unknown>,
  emit: SetupContext['emit'],
  name: TPropKey = 'modelValue' as TPropKey,
  transformer = (value: TValue) => value,
): WritableComputedRef<TValue> =>
  computed({
    get: () => props[name],
    set: value => emit(`update:${name}`, transformer(value)),
  })
