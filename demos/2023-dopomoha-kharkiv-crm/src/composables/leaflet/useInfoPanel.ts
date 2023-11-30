import * as L from 'leaflet'
import { ref } from 'vue'

/** Leaflet native panel for display of relevant data on the map */
export const useInfoPanel = () => {
  const panelRef = ref<HTMLDivElement>()

  // add info pane
  const infoPanel = new L.Control({ position: 'topright' }) as L.Control & {
    _div: HTMLDivElement
    update: () => void
  }

  // update the info panel based on feature properties
  const update = ({ name } = { name: 'Kharkiv' }) => {
    if (!panelRef.value) return

    panelRef.value.innerHTML = '<h4>District</h4>' + name
  }

  // Style the panel and set data
  infoPanel.onAdd = () => {
    panelRef.value = L.DomUtil.create(
      'div',
      'bg-white py-1 px-2 rounded-md shadow-md',
    )
    update()

    return panelRef.value
  }

  return { infoPanel, update }
}
