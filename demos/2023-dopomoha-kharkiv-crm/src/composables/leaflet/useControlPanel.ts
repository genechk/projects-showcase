import * as L from 'leaflet'
import { toRefs } from 'vue'

import { useMapUIStore } from '../stores'

type UseControlPanelProps = {
  appealGroupLayer: L.LayerGroup
  districtsGroupLayer: L.LayerGroup
  esriWorldImageryLayer: L.Layer
  openStreetMapLayer: L.Layer
}

/** Leaflet native panel that controls display of the map layers */
export const useControlPanel = ({
  appealGroupLayer,
  districtsGroupLayer,
  esriWorldImageryLayer,
  openStreetMapLayer,
}: UseControlPanelProps) => {
  const { controlPanelRef, isSatelliteEnabled } = toRefs(useMapUIStore())

  // Add layer control
  const baseLayers: Record<string, L.Layer> = isSatelliteEnabled.value
    ? {
        'Sattelite image': esriWorldImageryLayer,
        'Basic map': openStreetMapLayer,
      }
    : {
        'Basic map': openStreetMapLayer,
      }

  const overlays = {
    Districts: districtsGroupLayer,
    Appeals: appealGroupLayer,
  }

  const controlPanel = L.control.layers(baseLayers, overlays, {
    hideSingleBase: true,
    collapsed: false,
  })

  controlPanelRef.value = controlPanel

  return { controlPanel }
}
