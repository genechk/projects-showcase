const defaultStatus = 'Todo'

/** OpenStreetMap tiles and attribution text */
const openStreetMapLink = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const openStreetMapAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

/** Esri World Imagery tiles and attribution text */
const esriWorldImageryLink =
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
const esriWorldImageryAttribution =
  '<br />&copy; <a href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9">Esri</a>; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
const esriLegalNotice =
  'Maps throughout this book were created using ArcGIS® software by Esri. ArcGIS® and ArcMap™ are the intellectual property of Esri and are used herein under license. Copyright © Esri. All rights reserved. For more information about Esri® software, please visit www.esri.com.'

export {
  defaultStatus,
  esriLegalNotice,
  esriWorldImageryAttribution,
  esriWorldImageryLink,
  openStreetMapAttribution,
  openStreetMapLink,
}
