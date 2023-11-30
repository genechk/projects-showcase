import type { Column } from '../../content'
import {
  getRandomCoordinatesTuple,
  getRandomDate,
  getRandomInteger,
  getRandomOption,
  getRandomPhoneNumber,
} from './helpers'
import { randomData } from './randomData'
import { spreadsheetColumns } from './spreadsheetColumns'
import { spreadsheetOptions } from './spreadsheetOptions'

export const generateMockData = () => {
  const data = [] as (Column[] | null)[]

  const { type, managedBy, status, tag } = spreadsheetOptions

  for (let i = 1; i < 4290; i++) {
    const itemAddress = `${randomData.flatten('#addresses#')}, ${
      getRandomInteger(42) + 1
    }, ap. ${getRandomInteger(24) + 1}`

    const itemPhone = getRandomPhoneNumber(false)
    const itemStatus = getRandomOption(status)

    data[i] = spreadsheetColumns.map(column => {
      switch (column.semantic) {
        case 'appealId':
          return { ...column, value: String(i) }
        case 'type':
          return { ...column, value: getRandomOption(type) }
        case 'text':
          return {
            ...column,
            value: `${randomData.flatten(
              '#origin#',
            )}\n\n${itemAddress}\n${itemPhone}`,
          }
        case 'status':
          return { ...column, value: itemStatus }
        case 'managedBy':
          return { ...column, value: getRandomOption(managedBy) }
        case 'tag':
          return { ...column, value: getRandomOption(tag) }
        case 'address':
          return { ...column, value: itemAddress }
        case 'coordinates':
          return Math.random() * 15 > 1 ||
            itemStatus === 'Obsolete' ||
            itemStatus === 'No Answer'
            ? { ...column }
            : { ...column, value: getRandomCoordinatesTuple().join(', ') }
        case 'phone':
          return { ...column, value: itemPhone }
        case 'submitDate':
          return {
            ...column,
            value: getRandomDate().toLocaleDateString('en-UK'),
          }
        default:
          return { ...column }
      }
    })
  }

  return data
}

export const mockData = generateMockData()
