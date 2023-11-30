export type Stats = {
  // General
  total: number
  complete: number
  todo: number

  // Status
  notStarted: number
  verified: number
  inProgress: number

  // Category
  food: number
  medicine: number
  other: number

  // Type
  curated: number
  eligible: number
  selfSufficient: number
  blackList: number
  verification: number
}
