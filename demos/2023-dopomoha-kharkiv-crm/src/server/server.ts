import Pretender from 'pretender'

import { apiConstants } from '@dkc:content'
import {
  appealsStatsHandler,
  kharkivAppealsGeodataHandler,
  kharkivDistrictsGeodataHandler,
} from './handlers'

export const createServer = () => {
  const server = new Pretender()

  server.get(apiConstants.appealsStatsURL, appealsStatsHandler)
  server.get(
    apiConstants.kharkivDistrictsGeodataURL,
    kharkivDistrictsGeodataHandler,
  )
  server.get(
    apiConstants.kharkivAppealsGeodataURL,
    kharkivAppealsGeodataHandler,
  )

  return server
}
