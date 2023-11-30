export type PartialBy<T, TKeys extends keyof T> = Omit<T, TKeys> &
  Partial<Pick<T, TKeys>>

export type PartialExcept<T, TKeys extends keyof T> = Pick<T, TKeys> &
  Partial<Omit<T, TKeys>>

export const keysIn = <K extends string | number | symbol, T>(
  object: Partial<Record<K, T>>,
) => Object.keys(object) as K[]
