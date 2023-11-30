import * as L from 'leaflet'

import {
  esriWorldImageryAttribution,
  esriWorldImageryLink,
  openStreetMapAttribution,
  openStreetMapLink,
} from '@dkc:content/map'

/** Prepare tile layers */
export const useTileLayers = () => {
  /** Esri satellite tiles */
  const esriWorldImageryLayer = L.tileLayer(esriWorldImageryLink, {
    minZoom: 3,
    maxZoom: 19,
    attribution: esriWorldImageryAttribution,
  })

  /** OpenStreetMap tiles */
  const openStreetMapLayer = L.tileLayer(openStreetMapLink, {
    minZoom: 3,
    maxZoom: 19,
    attribution: openStreetMapAttribution,
  })

  return { esriWorldImageryLayer, openStreetMapLayer }
}
