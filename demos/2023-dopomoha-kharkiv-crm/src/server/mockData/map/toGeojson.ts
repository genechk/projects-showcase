export const geojsonHead = {
  type: 'FeatureCollection',
  crs: {
    type: 'name',
    properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
  },
}

export const toGeojson = <TFeature>(
  name: string,
  features: TFeature[] = [],
) => ({
  name,
  ...geojsonHead,
  features,
})
