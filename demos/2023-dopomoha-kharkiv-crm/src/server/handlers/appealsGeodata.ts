import { type ResponseData } from 'pretender'

import { columnsSchema, type AppealAPIData } from '@dkc:content/schemas'
import { mockData, toGeojson } from '../mockData'

const appealsWithGeodata = mockData.filter(
  column => !!column && !!column[7].value,
)

const generatedGeodata = columnsSchema
  .transform(columns => {
    return columns.reduce(
      (prev, column) => {
        return {
          ...prev,
          [column.semantic]: column.value,
        }
      },
      {} as Record<keyof AppealAPIData, string>,
    )
  })
  .transform(
    appeal =>
      ({
        type: 'Feature',
        geometry: {
          coordinates: appeal.coordinates.split(', '),
          type: 'Point',
        },
        properties: appeal,
      }) as const,
  )
  .array()
  .safeParse(appealsWithGeodata)

export const kharkivAppealsGeodataHandler = async () => {
  if (!generatedGeodata.success) {
    return [
      404,
      { 'Content-Type': 'text/html' },
      'No geodata',
    ] satisfies ResponseData
  }

  const kharkivAppealData = toGeojson('KharkivAppeals', generatedGeodata.data)

  return [
    200,
    { 'Content-Type': 'application/json' },
    JSON.stringify(kharkivAppealData),
  ] satisfies ResponseData
}
