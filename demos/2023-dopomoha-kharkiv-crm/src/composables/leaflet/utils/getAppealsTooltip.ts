import { defaultStatus } from '@dkc:content/map'
import type { MapAppealData } from '@dkc:types'

/** Configure tooltip for request data map pins */
export const getAppealsTooltip = ({ appealId, status }: MapAppealData) => `
    <h4 style="font-family:'Remissis',sans-serif; font-size:0.875rem;">
      ${appealId}
    </h4>
    <div>${status || defaultStatus}</div>
  `
