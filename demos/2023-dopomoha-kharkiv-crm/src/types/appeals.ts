import type { AppealAPIData, Column, LabeledColumns } from '@dkc:content'

export type TabNumber = 0 | 1 | 2

export type Tab = {
  label: string
  number: TabNumber
}

export type SpreadsheetData = {
  columnsArray: Column[]
  labeledColumns: Partial<LabeledColumns>
}

export type InteractionHandler = (event?: MouseEvent) => void

export type MapUIData = {
  isAppealInDeliveryRoute?: boolean | undefined | null
  onDeleteFromDelivery?: () => void | undefined | null
  onAddToDelivery?: () => void | undefined | null
  mapPinElement?: HTMLElement | undefined | null
}

export type MapAppealData = AppealAPIData & MapUIData
