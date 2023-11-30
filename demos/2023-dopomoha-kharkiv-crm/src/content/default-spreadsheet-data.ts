import { inputFieldLayouts } from './input-field-layouts'
import type { Column, LabeledColumns } from './schemas'

export const defaultColumnsArray = (
  [
    { name: 'Serial Number', semantic: 'appealId' },
    { name: 'Type', semantic: 'type' },
    { name: 'Original Text', semantic: 'text' },
    { name: 'Status', semantic: 'status' },
    { name: 'Managed By', semantic: 'managedBy' },
    { name: 'Submit Date', semantic: 'submitDate' },
    { name: 'Tag', semantic: 'tag' },
    { name: 'Address', semantic: 'address' },
    { name: 'Phone', semantic: 'phone' },
  ] as const
).map(column => ({
  ...column,
  tabs: [0],
  value: '',
  layout: inputFieldLayouts.inputFull,
})) satisfies Column[]

export const defaultLabeledColumns: LabeledColumns = defaultColumnsArray.reduce(
  (acc, column) => {
    return {
      ...acc,
      [column.semantic]: column,
    }
  },
  {} as LabeledColumns,
)

export const defaultSpreadsheetData = {
  columnsArray: defaultColumnsArray,
  labeledColumns: defaultLabeledColumns,
}
