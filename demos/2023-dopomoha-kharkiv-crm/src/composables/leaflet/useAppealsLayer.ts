import * as L from 'leaflet'
import { toRefs } from 'vue'

import { apiConstants } from '@dkc:content'
import type { MapAppealData } from '@dkc:types'
import { fetchData } from '@dkc:utils'
import { useMapUIStore } from '../stores'
import { getAppealsMarker, getAppealsPopover, getAppealsTooltip } from './utils'

const geodataURL = apiConstants.kharkivAppealsGeodataURL

/** Configures appeals layer */
export const useAppealsLayer = () => {
  const mapStore = useMapUIStore()
  const {
    appealsGeoData,
    isSidebarOpen,
    isMapPopupDisplayed,
    isMapTooltipDisplayed,
    selectedAppeal,
  } = toRefs(mapStore)

  const {
    onOpenDetailsTab,
    onOpenSidebar,
    onCloseSidebar,
    onDeleteFromDelivery,
    onAddToDelivery,
  } = mapStore

  // Create layer group
  const appealGroupLayer = L.layerGroup()

  /** Appeals layer customization */
  const appealLayerOptions: L.GeoJSONOptions<MapAppealData> = {
    onEachFeature: (feature, layer) => {
      if (isMapTooltipDisplayed.value) {
        layer.bindTooltip(getAppealsTooltip(feature.properties))
      }

      if (isMapPopupDisplayed.value) {
        layer.bindPopup(
          getAppealsPopover(
            feature.properties,
            onAddToDelivery,
            onDeleteFromDelivery,
            () => {
              onOpenSidebar()
              onOpenDetailsTab()
            },
          ),
        )
      }

      layer.on({
        add: event => {
          if (!feature.properties.mapPinElement) {
            feature.properties.mapPinElement = event.target._icon
          }
        },

        click: event => {
          if (selectedAppeal.value && selectedAppeal.value.mapPinElement) {
            selectedAppeal.value.mapPinElement.classList.remove('selected')
          }
          // Allow access to clicked map pin request data in other components
          selectedAppeal.value = feature.properties

          const icon = event.target._icon
          icon.classList.add('selected')

          selectedAppeal.value.mapPinElement = icon
        },

        dblclick: () => {
          if (isSidebarOpen.value) {
            onCloseSidebar()

            return
          }

          onOpenSidebar()
          onOpenDetailsTab()
        },
      })

      appealGroupLayer.addLayer(layer)
    },

    pointToLayer: (feature, latlng) => {
      const { appealId, status } = feature.properties || {}

      // TODO: Better error handling
      if (!appealId) return L.marker(latlng, { opacity: 0 })

      const markerType = status || ''

      return getAppealsMarker(latlng, markerType, appealId)
    },
  }

  /** Fetches appeals data from API endpoint and adds it to `appealGroupLayer` */
  const onAddAppealsToMap = async (url = geodataURL) => {
    const data = await fetchData<GeoJSON.GeoJsonObject>(url)

    appealsGeoData.value = L.geoJson(data, appealLayerOptions).addTo(
      appealGroupLayer,
    )
  }

  /** Refetches request data from API and re-adds it to the map layer */
  const onUpdateAppealOnMap = (url = geodataURL) => {
    if (!appealsGeoData.value) return

    appealGroupLayer.removeLayer(appealsGeoData.value as L.Layer)

    return onAddAppealsToMap(url)
  }

  return {
    appealGroupLayer,
    onAddAppealsToMap,
    onUpdateAppealOnMap,
  }
}
