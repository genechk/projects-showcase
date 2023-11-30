import type { LatLngBounds, LatLngTuple, LayerGroup, Map } from 'leaflet'
import * as L from 'leaflet'

import { districtLabels, type District } from '@dkc:content'
import type { MapAppealData } from '@dkc:types'

const districtParams: Record<
  District,
  {
    coordinates: LatLngTuple
    zoomLevel: number
    label: string
    id?: string
    bounds?: LatLngBounds
  }
> = {
  kharkiv: {
    coordinates: [50, 36.3],
    zoomLevel: 10,
    label: districtLabels.kharkiv,
  },
  industrialnyi: {
    coordinates: [49.93, 36.38],
    zoomLevel: 11,
    label: districtLabels.industrialnyi,
    id: 'r7340969',
    bounds: L.latLngBounds(L.latLng(49.862, 36.1), L.latLng(50.1, 36.46)),
  },
  niemyshlia: {
    coordinates: [49.96, 36.35],
    zoomLevel: 11,
    label: districtLabels.niemyshlia,
    id: 'r7340972',
    bounds: L.latLngBounds(L.latLng(49.862, 36.1), L.latLng(50.1, 36.46)),
  },
  saltivskiy: {
    coordinates: [49.99, 36.32],
    zoomLevel: 11,
    label: districtLabels.saltivskiy,
    id: 'r7340971',
    bounds: L.latLngBounds(L.latLng(49.862, 36.1), L.latLng(50.1, 36.46)),
  },
  kyivskyi: {
    coordinates: [50.03, 36.3],
    zoomLevel: 11,
    label: districtLabels.kyivskyi,
    id: 'r7340973',
    bounds: L.latLngBounds(L.latLng(49.862, 36.1), L.latLng(50.1, 36.46)),
  },
  shevchenkivskyi: {
    coordinates: [50.035, 36.225],
    zoomLevel: 11,
    label: districtLabels.shevchenkivskyi,
    id: 'r3796255',
    bounds: L.latLngBounds(L.latLng(49.862, 36.1), L.latLng(50.1, 36.46)),
  },
  holodnohirskyi: {
    coordinates: [50.005, 36.17],
    zoomLevel: 11,
    label: districtLabels.holodnohirskyi,
    id: 'r3801249',
    bounds: L.latLngBounds(L.latLng(49.862, 36.1), L.latLng(50.1, 36.46)),
  },
  novobavarskyi: {
    coordinates: [49.96, 36.18],
    zoomLevel: 12,
    label: districtLabels.novobavarskyi,
    id: 'r3801278',
    bounds: L.latLngBounds(L.latLng(49.862, 36.1), L.latLng(50.1, 36.46)),
  },
  osnovianskyi: {
    coordinates: [49.945, 36.23],
    zoomLevel: 11,
    label: districtLabels.osnovianskyi,
    id: 'r3801315',
    bounds: L.latLngBounds(L.latLng(49.89, 36.2), L.latLng(49.98, 36.3)),
  },
  slobidskyi: {
    coordinates: [49.95, 36.28],
    zoomLevel: 12,
    label: districtLabels.slobidskyi,
    id: 'r7340970',
    bounds: L.latLngBounds(L.latLng(49.898, 36.24), L.latLng(49.97, 36.36)),
  },
}

/** Kharkiv map boundaries */
const kharkivSouthWest = L.latLng(49.862, 36.1)
const kharkivNorthEast = L.latLng(50.1, 36.46)
const kharkivCityBounds = L.latLngBounds(kharkivSouthWest, kharkivNorthEast)

/** Kharkiv region map boundaries */
const kharkivRegionSouthWest = L.latLng(48.5, 34.8)
const kharkivRegionNorthEast = L.latLng(50.5, 38.3)
const kharkivRegionBounds = L.latLngBounds(
  kharkivRegionSouthWest,
  kharkivRegionNorthEast,
)

const setDistrictView = (map: Map, district: District) => {
  const { coordinates, zoomLevel } = districtParams[district]
  map.setView(coordinates, zoomLevel, { animate: true })
}

/** Iterates through all layers in group, returns one with matching `appealId` */
const findMapPinByAppealId = (
  appealGroupLayer: LayerGroup<MapAppealData>,
  id: string,
) => {
  const layers = appealGroupLayer.getLayers()

  for (let i = 0; i < layers.length - 1; i++) {
    // @ts-expect-error TODO: Better typing
    const appealId = layers[i].feature.properties.appealId

    if (appealId === id) {
      return layers[i]
    }
  }

  return false
}

export {
  districtParams,
  findMapPinByAppealId,
  kharkivCityBounds,
  kharkivNorthEast,
  kharkivRegionBounds,
  kharkivRegionNorthEast,
  kharkivRegionSouthWest,
  kharkivSouthWest,
  setDistrictView,
}
