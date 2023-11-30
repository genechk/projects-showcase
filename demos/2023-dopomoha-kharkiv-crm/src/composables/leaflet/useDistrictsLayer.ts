import { MultiPolygon } from 'geojson'
import * as L from 'leaflet'
import { toRefs } from 'vue'

import { apiConstants } from '@dkc:content'
import type { DistrictProperties } from '@dkc:types'
import { fetchData } from '@dkc:utils'
import { useMapUIStore } from '../stores'
import { districtParams } from './utils'

const kharkivGeoDataUrl = apiConstants.kharkivDistrictsGeodataURL

type UseDistrictsLayerProps = {
  map: L.Map
}

export const getDistrictBounds = (
  district: DistrictProperties,
  geometry: MultiPolygon,
) => {
  const districtData = Object.values(districtParams).filter(
    ({ id }) => id === district.full_id,
  )[0]

  // TODO: Set bounds contextually
  if (!districtData || !districtData.bounds) return

  const coordinates = geometry.coordinates as L.LatLngExpression[][][]
  const [position] = coordinates
  const faultyBounds = L.polygon(position).getBounds()

  // Fix for some kind of library bug
  const districtNorthEast = faultyBounds.getNorthEast()
  const districtSouthWest = faultyBounds.getSouthWest()

  const flippedSW = L.latLng(districtSouthWest.lng, districtSouthWest.lat)
  const flippedNE = L.latLng(districtNorthEast.lng, districtNorthEast.lat)

  return L.latLngBounds(flippedSW, flippedNE)
}

/** Configures districts layer */
export const useDistrictsLayer = async ({ map }: UseDistrictsLayerProps) => {
  // Create layer group
  const districtsGroupLayer = L.layerGroup()
  const { selectedDistrict, zoomThresholds } = toRefs(useMapUIStore())

  /** Districts layer customization */
  const districtsOptions: L.GeoJSONOptions<DistrictProperties, MultiPolygon> = {
    // Style options
    style: () => ({
      className: 'district-overlay',
      weight: 1,
      fillOpacity: 0,
      stroke: true,
    }),

    // Setup districts layer interactions
    onEachFeature: (feature, layer) => {
      const name = feature.properties?.name
      layer.bindPopup(name, {
        content: name,
        className: 'district-popup cursor-pointer',
      })
      const popup = layer.getPopup()

      const popupCloseHandler = () => void (selectedDistrict.value = undefined)
      const popupClickHandler = () => {
        const bounds = getDistrictBounds(feature.properties, feature.geometry)
        if (!bounds) return

        selectedDistrict.value = undefined
        map.flyToBounds(bounds, { animate: true })
      }

      layer.on({
        popupopen: () => {
          // @ts-expect-error undocumented feature
          popup?._closeButton?.addEventListener('click', popupCloseHandler)
          // @ts-expect-error undocumented feature
          popup?._contentNode?.addEventListener('click', popupClickHandler)
        },

        click: (event: L.LeafletMouseEvent) => {
          const district = event.target.feature
          const bounds = getDistrictBounds(feature.properties, feature.geometry)

          if (
            bounds &&
            selectedDistrict.value?.id === district.properties.full_id &&
            event.target._map._zoom <= zoomThresholds.value.districtsHover
          ) {
            selectedDistrict.value = undefined
            map.flyToBounds(bounds, { animate: true })
            event.target.closePopup()

            return
          }

          selectedDistrict.value = {
            name: district.properties.name,
            id: district.properties.full_id,
            region: district.properties.region,
          }
        },

        mouseover: event => {
          const layer = event.target

          if (layer._map._zoom <= zoomThresholds.value.districtsHover) {
            layer.setStyle({
              weight: 2,
              fillOpacity: 0.2,
            })
          }
        },

        mousemove: event => {
          if (event.target._map._zoom > zoomThresholds.value.districtsHover) {
            districtNamesLayer.resetStyle(event.target)
          }
        },

        mouseout: event => {
          districtNamesLayer.resetStyle(event.target)
        },
      })
    },
  }

  // Fetch data from server
  const districtsData =
    await fetchData<GeoJSON.GeoJsonObject>(kharkivGeoDataUrl)

  // Add GeoJSON data
  const districtNamesLayer = L.geoJSON(districtsData, districtsOptions).addTo(
    districtsGroupLayer,
  )

  return {
    districtsData,
    districtsGroupLayer,
    districtNamesLayer,
    districtsOptions,
    selectedDistrict,
  }
}
