import * as L from 'leaflet'

import { defaultStatus } from '@dkc:content/map'
import { MapAppealData } from '@dkc:types'

/** Configure popup for appeal data map pins */
export const getAppealsPopover = (
  appeal: MapAppealData,
  onAddToDelivery: (appeal?: MapAppealData) => void,
  onDeleteFromDelivery: (appeal: MapAppealData) => void,
  onOpenDetailsTab: () => void,
) => {
  const container = L.DomUtil.create(
    'div',
    'flex flex-col gap-1 items-stretch p-0 m-0',
  )
  const dataDiv = L.DomUtil.create('div', 'pb-1', container)
  const h4 = L.DomUtil.create('h4', 'font-base mb-1', dataDiv)
  const statusDiv = L.DomUtil.create('div', 'm-0', dataDiv)

  if (appeal.tag) {
    const tagDiv = L.DomUtil.create('div', 'm-0', dataDiv)
    tagDiv.innerHTML = appeal.tag
  }

  const buttonAdd = L.DomUtil.create(
    'button',
    'btn-primary grid place-items-center w-auto text-xs px-2 py-1',
    container,
  )

  const buttonDetails = L.DomUtil.create(
    'button',
    'btn-primary w-auto grid place-items-center bg-slate-600 text-xs px-2 py-1',
    container,
  )

  h4.innerHTML = appeal.appealId
  statusDiv.innerHTML = appeal.status || defaultStatus
  buttonDetails.innerHTML = 'Details'
  buttonAdd.setAttribute('style', 'min-width: 90px')

  buttonDetails.addEventListener('click', onOpenDetailsTab)

  const setAddStyles = () => {
    buttonAdd.innerHTML = 'Add to route'
    buttonAdd.classList.add('btn-primary')
    buttonAdd.classList.remove('btn-danger')

    buttonAdd.removeEventListener('click', deleteFromDeliveryHandler)
    buttonAdd.addEventListener('click', addToDeliveryHandler)
  }
  const deleteFromDeliveryHandler = () => {
    onDeleteFromDelivery(appeal)
    setAddStyles()
  }

  const setDeleteStyles = () => {
    buttonAdd.innerHTML = 'Remove'
    buttonAdd.classList.remove('btn-primary')
    buttonAdd.classList.add('btn-danger')

    buttonAdd.removeEventListener('click', addToDeliveryHandler)
    buttonAdd.addEventListener('click', deleteFromDeliveryHandler)
  }
  const addToDeliveryHandler = () => {
    onAddToDelivery()
    setDeleteStyles()
  }

  appeal.onDeleteFromDelivery = setAddStyles
  appeal.onAddToDelivery = setDeleteStyles

  if (appeal.isAppealInDeliveryRoute) {
    setDeleteStyles()

    return container
  }

  setAddStyles()

  return container
}
