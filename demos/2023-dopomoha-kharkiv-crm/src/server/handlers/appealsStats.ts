import { type ResponseData } from 'pretender'

import { type Stats } from '@dkc:types'

export const appealsStatsHandler = () => {
  return [
    200,
    { 'Content-Type': 'application/json' },
    JSON.stringify({
      // General
      total: 5609,
      complete: 2412,
      todo: 5609 - 2412,

      // Status
      notStarted: 1142,
      verified: 597,
      inProgress: 79,

      // Category
      food: 2216,
      medicine: 3980,
      other: 99,

      // Mark
      curated: 99,
      eligible: 265,
      selfSufficient: 265,
      blackList: 21,
      verification: 48,
    } satisfies Stats),
  ] satisfies ResponseData
}
