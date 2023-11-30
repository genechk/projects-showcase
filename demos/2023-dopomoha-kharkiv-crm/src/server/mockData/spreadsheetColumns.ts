import { inputFieldLayouts, type Column } from '@dkc:content'
import { spreadsheetOptions } from './spreadsheetOptions'

const {
  id: idLayout,
  inputFull,
  inputHalf,
  selectFull,
  selectHalf,
  text,
  textarea,
} = inputFieldLayouts

export const spreadsheetColumns = [
  {
    name: 'Serial Number',
    semantic: 'appealId',
    layout: idLayout,
    tabs: [0],
    type: 'number',
    value: '',
    isRequired: true,
    isDisabled: true,
  },
  {
    name: 'Type',
    semantic: 'type',
    layout: selectHalf,
    options: spreadsheetOptions.type,
    tabs: [0],
    value: '',
    isRequired: false,
    isValidated: true,
  },
  {
    name: 'Original Text',
    semantic: 'text',
    layout: text,
    tabs: [0],
    value: '',
    isRequired: true,
  },
  {
    name: 'Status',
    semantic: 'status',
    layout: selectFull,
    options: spreadsheetOptions.status,
    tabs: [0],
    value: '',
    isRequired: false,
    isValidated: true,
  },
  {
    name: 'Managed By',
    semantic: 'managedBy',
    layout: selectFull,
    options: spreadsheetOptions.managedBy,
    tabs: [0],
    value: '',
    isRequired: false,
    isValidated: false,
  },
  {
    name: 'Tag',
    semantic: 'tag',
    layout: selectHalf,
    options: spreadsheetOptions.tag,
    tabs: [0],
    value: '',
    isRequired: false,
  },
  {
    name: 'Address',
    semantic: 'address',
    layout: inputFull,
    tabs: [0, 1, 2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Coordinates',
    semantic: 'coordinates',
    layout: inputFull,
    tabs: [1, 2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Phone',
    semantic: 'phone',
    layout: inputHalf,
    tabs: [0, 1, 2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Submit Date',
    semantic: 'submitDate',
    layout: inputHalf,
    tabs: [0, 1],
    value: '',
    isRequired: true,
  },

  {
    name: 'Updated On',
    semantic: 'updateDate',
    layout: inputHalf,
    tabs: [1],
    value: '',
    isRequired: false,
  },
  {
    name: 'Updated By',
    semantic: 'updatedBy',
    layout: inputHalf,
    tabs: [1],
    value: '',
    isRequired: false,
  },
  {
    name: 'Deadline Date',
    semantic: 'deadlineDate',
    layout: inputHalf,
    tabs: [0, 1],
    value: '',
    isRequired: false,
  },
  {
    name: 'Contact Name',
    semantic: 'contactName',
    layout: inputFull,
    tabs: [2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Life Circumstances',
    semantic: 'circumstances',
    layout: textarea,
    tabs: [2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Ailments & Diagnoses',
    semantic: 'medicalData',
    layout: textarea,
    tabs: [2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Update History',
    semantic: 'updateHistory',
    layout: textarea,
    tabs: [1],
    value: '',
    isRequired: false,
  },
  {
    name: 'Medicine List',
    semantic: 'medicineList',
    layout: textarea,
    tabs: [1],
    value: '',
    isRequired: false,
  },
  {
    name: 'Food Rations',
    semantic: 'foodRations',
    layout: inputHalf,
    tabs: [1],
    value: '',
    isRequired: false,
  },
  {
    name: 'Hygiene Kits',
    semantic: 'hygieneKits',
    layout: inputHalf,
    tabs: [1],
    value: '',
    isRequired: false,
  },
  {
    name: 'Baby Care',
    semantic: 'babyCare',
    layout: inputHalf,
    tabs: [1],
    value: '',
    isRequired: false,
  },
  {
    name: 'Pet Food',
    semantic: 'petFood',
    layout: inputHalf,
    tabs: [1],
    value: '',
    isRequired: false,
  },
  {
    name: 'Budget',
    semantic: 'budget',
    layout: inputHalf,
    tabs: [1],
    value: '',
    isRequired: false,
  },

  {
    name: 'Start Date',
    semantic: 'commencementDate',
    layout: inputHalf,
    tabs: [2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Completion',
    semantic: 'completionDate',
    layout: inputHalf,
    tabs: [2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Volunteer',
    semantic: 'volunteer',
    layout: selectHalf,
    options: spreadsheetOptions.volunteer,
    tabs: [2],
    value: '',
    isRequired: false,
    isValidated: false,
  },
  {
    name: 'Aid History',
    semantic: 'aidHistory',
    layout: textarea,
    tabs: [2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Volunteer’s Comment',
    semantic: 'volunteersComment',
    layout: textarea,
    tabs: [2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Photos',
    semantic: 'photos',
    layout: inputFull,
    tabs: [2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Receipts',
    semantic: 'receipts',
    layout: inputFull,
    tabs: [2],
    value: '',
    isRequired: false,
  },
  {
    name: 'Verification Sheet',
    semantic: 'verificationSheet',
    layout: inputFull,
    tabs: [2],
    value: '',
    isRequired: false,
  },

  {
    name: 'Additional Comments',
    semantic: 'additionalComment',
    layout: textarea,
    tabs: [2],
    value: '',
    isRequired: false,
  },
] as const satisfies readonly Column[]
