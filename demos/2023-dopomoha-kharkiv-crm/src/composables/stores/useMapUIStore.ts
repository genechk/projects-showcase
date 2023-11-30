import { Control, Layer, Map, TileLayer } from 'leaflet'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import type { MapAppealData } from '@dkc:types'

const animationDelays = {
  openSidebar: 100,
  closeSidebar: 500,
}

export const useMapUIStore = defineStore('map', () => {
  // Map
  const mapRef = ref<Map>()
  const mapElementRef = ref<HTMLDivElement>()

  // Map layers
  const appealsGeoData = ref<Layer>()
  const controlPanelRef = ref<Control.Layers>()
  const satelliteTilesRef = ref<TileLayer>()

  const onToggleControlPanel = () => {
    if (!controlPanelRef.value || !mapRef.value) return

    if (isControlPanelEnabled.value) {
      controlPanelRef.value.remove()
      isControlPanelEnabled.value = false

      return
    }

    controlPanelRef.value.addTo(mapRef.value)
    isControlPanelEnabled.value = true
  }

  const onToggleSatelliteLayer = () => {
    if (!satelliteTilesRef.value || !mapRef.value) return

    if (isSatelliteEnabled.value) {
      satelliteTilesRef.value.remove()
      isSatelliteEnabled.value = false

      return
    }

    satelliteTilesRef.value.addTo(mapRef.value)
    isSatelliteEnabled.value = true
  }

  // UI State
  const isSidebarOpen = ref(false)
  const isZoomedOut = ref(false)
  const isMapPopupDisplayed = ref(true)
  const isMapTooltipDisplayed = ref(false)

  // Settings
  /** Flag which enables satellite tiles (Esri) */
  const isSatelliteEnabled = ref(false)
  const isControlPanelEnabled = ref(false)
  const isInfoPanelDisplayed = ref(false)
  const zoomThresholds = reactive({
    mapPins: 12,
    districtsHover: 13,
  })

  // Interactions
  const selectedAppeal = ref<MapAppealData>()
  const selectedDistrict = ref<{
    id: string
    name: string
    region: string
  }>()

  const onMapResize = () => {
    mapRef.value &&
      mapRef.value.invalidateSize({
        animate: true,
        debounceMoveend: true,
        duration: 400,
        easeLinearity: 4,
        noMoveStart: true,
        pan: true,
      })
  }

  // Sidebar
  const onToggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
    setTimeout(onMapResize, animationDelays.closeSidebar)
  }
  const onOpenSidebar = () => {
    isSidebarOpen.value = true
    setTimeout(onMapResize, animationDelays.openSidebar)
  }
  const onCloseSidebar = () => {
    isSidebarOpen.value = false
    setTimeout(onMapResize, animationDelays.closeSidebar)
  }
  const selectedSidebarTab = ref(0)
  const onChangeTab = (index: number) => (selectedSidebarTab.value = index)
  const onOpenDetailsTab = () => onChangeTab(0)
  const onOpenRoutesTab = () => onChangeTab(1)
  const onOpenSettingsTab = () => onChangeTab(2)

  // Delivery
  const delivery = reactive({
    route: [] as MapAppealData[],
  })

  const onAddToDelivery = (
    appeal: MapAppealData | undefined = selectedAppeal.value,
  ) => {
    onOpenSidebar()
    onOpenRoutesTab()

    if (!appeal || delivery.route.includes(appeal)) return

    appeal.isAppealInDeliveryRoute = true
    delivery.route.push(appeal)

    if (appeal.mapPinElement) {
      appeal.mapPinElement.classList.add('delivery-route')
    }

    if (appeal.onAddToDelivery) {
      appeal.onAddToDelivery()
    }
  }

  /** Resets classes and interactions */
  const onResetAppeal = (appeal: MapAppealData) => {
    appeal.isAppealInDeliveryRoute = false

    if (appeal.onDeleteFromDelivery) {
      appeal.onDeleteFromDelivery()
    }

    if (appeal.mapPinElement) {
      appeal.mapPinElement.classList.remove('delivery-route')
    }
  }

  const onDeleteFromDelivery = (appeal: MapAppealData) => {
    delivery.route = delivery.route.filter(
      ({ appealId }) => appealId !== appeal.appealId,
    )

    onResetAppeal(appeal)
  }

  const onClearDeliveryRoute = () => {
    delivery.route.forEach(onResetAppeal)
    delivery.route = []
  }

  return {
    appealsGeoData,
    controlPanelRef,
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
    onOpenDetailsTab,
    onOpenRoutesTab,
    onOpenSettingsTab,
    onOpenSidebar,
    onResetAppeal,
    onToggleControlPanel,
    onToggleSatelliteLayer,
    onToggleSidebar,
    satelliteTilesRef,
    selectedAppeal,
    selectedDistrict,
    selectedSidebarTab,
    zoomThresholds,
  }
})
