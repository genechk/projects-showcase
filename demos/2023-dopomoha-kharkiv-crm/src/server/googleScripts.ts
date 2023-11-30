/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from '@dkc:content'
import { mockData, spreadsheetColumns } from './mockData'

const MOCK_API_LAG = 500

export const google = (function () {
  return {
    columnsArray: spreadsheetColumns,
    data: mockData,
    script: {
      host: { close: () => console.log('Sidebar closed') },
      run: {
        withSuccessHandler: (handler: (...args: any) => any) => {
          google.script.run.onSuccess = handler
          return google.script.run
        },

        withFailureHandler: (handler: (e: any) => void) => {
          google.script.run.onFailure = handler
          return google.script.run
        },

        onSuccess: (...args: any[]) => {},

        onFailure: (e: Error | string | unknown) => {
          console.log(e)
        },

        querySingleAppeal: async (appealId: string) => {
          try {
            await wait(MOCK_API_LAG)
            const columns = google.data[Number(appealId)]
            if (!columns) throw 'No data available'

            return google.script.run.onSuccess(columns)
          } catch (e) {
            google.script.run.onFailure(e)
          }
        },

        createNewRow: async () => {
          try {
            await wait(MOCK_API_LAG)
            const columns = [...spreadsheetColumns] as Column[]
            const nextAppealId = google.data.length
            columns[0].value = String(nextAppealId)
            google.data.push(columns)

            return google.script.run.onSuccess(columns)
          } catch (e) {
            google.script.run.onFailure(e)
          }
        },

        updateRowById: async (
          updatedColumns: Column[],
          rowId: string | undefined,
        ) => {
          try {
            await wait(MOCK_API_LAG)
            google.data[Number(rowId)] = updatedColumns

            return google.script.run.onSuccess()
          } catch (e) {
            google.script.run.onFailure(e)
          }
        },

        log: console.log,
      },
    },
  }
})()

const wait = (timeout = 10, callback = () => {}) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(callback())
      }, timeout)
    } catch (e) {
      reject(e)
    }
  })
}
