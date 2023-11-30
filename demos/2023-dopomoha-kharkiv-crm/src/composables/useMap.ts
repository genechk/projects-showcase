import { onMounted, toRefs } from 'vue'

import { currentDistrict } from '@dkc:content'
import { onError } from '@dkc:utils'
import { useMapUIStore } from './stores'

export const useMap = () => {
  const mapStore = useMapUIStore()
  const {
    appealsGeoData,
    delivery,
    isControlPanelEnabled,
    isInfoPanelDisplayed,
    isMapPopupDisplayed,
    isMapTooltipDisplayed,
    isSatelliteEnabled,
    isSidebarOpen,
    isZoomedOut,
    mapElementRef,
    mapRef,
    satelliteTilesRef,
    selectedAppeal,
    selectedDistrict,
    selectedSidebarTab,
    zoomThresholds,
  } = toRefs(mapStore)

  const {
    onAddToDelivery,
    onChangeTab,
    onClearDeliveryRoute,
    onCloseSidebar,
    onDeleteFromDelivery,
    onOpenRoutesTab,
    onResetAppeal,
    onToggleControlPanel,
    onToggleSatelliteLayer,
    onToggleSidebar,
  } = mapStore

  onMounted(async () => {
    try {
      const L = await import('leaflet')
      if (!mapRef.value || !mapElementRef.value) {
        const {
          districtParams,
          kharkivCityBounds,
          kharkivRegionBounds,
          useControlPanel,
          useDistrictsLayer,
          useInfoPanel,
          useAppealsLayer,
          useTileLayers,
        } = await import('@dkc:composables/leaflet')

        // Create main map
        const { coordinates, zoomLevel } = districtParams[currentDistrict]
        const appealsMap = L.map('map', {
          zoomControl: false,
          doubleClickZoom: false,
        }).setView(coordinates, zoomLevel)

        if (!appealsMap) {
          onError('No map was created')

          return {}
        }

        // Allow Vue access to the map
        mapRef.value = appealsMap

        // Set initial limits on page load
        appealsMap.fitBounds(kharkivCityBounds, {
          animate: true,
        })

        // Set map extend limits
        appealsMap.setMaxBounds(kharkivRegionBounds)
        appealsMap.on('drag', () => {
          appealsMap.panInsideBounds(kharkivRegionBounds, { animate: true })
        })

        // Switch map styles when map zoom level changes (bigger map icons when zoomed in)
        appealsMap.on('zoomend', event => {
          isZoomedOut.value = event.target._zoom < zoomThresholds.value.mapPins
        })

        // Adjust map marker styles to zoom level
        isZoomedOut.value = zoomLevel < zoomThresholds.value.mapPins

        const { esriWorldImageryLayer, openStreetMapLayer } = useTileLayers()
        satelliteTilesRef.value = esriWorldImageryLayer

        const { onAddAppealsToMap, appealGroupLayer } = useAppealsLayer()

        const { districtsGroupLayer } = await useDistrictsLayer({
          map: appealsMap,
        })

        const { controlPanel } = useControlPanel({
          esriWorldImageryLayer,
          openStreetMapLayer,
          districtsGroupLayer,
          appealGroupLayer,
        })

        const { infoPanel } = useInfoPanel()

        // Call appeals API once
        onAddAppealsToMap()

        // Add all layers to map
        openStreetMapLayer.addTo(appealsMap)
        districtsGroupLayer.addTo(appealsMap)
        appealGroupLayer.addTo(appealsMap)

        if (isSatelliteEnabled.value) {
          esriWorldImageryLayer.addTo(appealsMap)
        }

        if (isControlPanelEnabled.value) {
          controlPanel.addTo(appealsMap)
        }

        if (isInfoPanelDisplayed.value) {
          infoPanel.addTo(appealsMap)
        }
      } else {
        const container = mapRef.value.getContainer()
        mapElementRef.value.replaceWith(container)
      }
    } catch (err) {
      onError(err)
    }
  })

  return {
    appealsGeoData,
    delivery,
    isControlPanelEnabled,
    isInfoPanelDisplayed,
    isMapPopupDisplayed,
    isMapTooltipDisplayed,
    isSatelliteEnabled,
    isSidebarOpen,
    isZoomedOut,
    mapElementRef,
    mapRef,
    onAddToDelivery,
    onChangeTab,
    onClearDeliveryRoute,
    onCloseSidebar,
    onDeleteFromDelivery,
    onOpenRoutesTab,
    onResetAppeal,
    onToggleSatelliteLayer,
    onToggleSidebar,
    onToggleControlPanel,
    selectedAppeal,
    selectedDistrict,
    selectedSidebarTab,
    zoomThresholds,
  }
}
