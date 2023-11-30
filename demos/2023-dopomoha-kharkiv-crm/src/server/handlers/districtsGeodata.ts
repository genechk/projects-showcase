import { type ResponseData } from 'pretender'

export const kharkivDistrictsGeodataHandler = async () => {
  const kharkivDistrictsData = await import(
    '../mockData/map/kharkivAndRegion.json'
  )

  return [
    200,
    { 'Content-Type': 'application/json' },
    JSON.stringify(kharkivDistrictsData),
  ] satisfies ResponseData
}
