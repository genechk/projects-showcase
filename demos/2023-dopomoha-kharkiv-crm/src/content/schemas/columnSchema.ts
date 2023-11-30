import z from 'zod'
import {
  inputFieldLayouts,
  type InputFieldLayout,
} from '../input-field-layouts'
import { appealAPIDataSchema, type AppealAPIData } from './appealDataSchema'

export const columnSchema = z.object({
  name: z.string(),
  semantic: appealAPIDataSchema.keyof(),
  layout: z
    .string()
    .refine((arg: string): arg is InputFieldLayout =>
      Object.values(inputFieldLayouts).includes(arg as InputFieldLayout),
    )
    .default(inputFieldLayouts.inputFull),
  tabs: z.array(z.number().min(0).max(3)).readonly().default([]),
  type: z.enum(['number', 'text']).default('text').optional(),
  options: z.array(z.string()).readonly().optional(),
  value: z.string().default(''),
  isRequired: z.boolean().optional(),
  isDisabled: z.boolean().optional(),
  isValidated: z.boolean().optional(),
})

export const columnsSchema = z
  .tuple([
    columnSchema.extend({ semantic: z.literal('appealId') }),
    columnSchema.extend({ semantic: z.literal('type') }),
    columnSchema.extend({ semantic: z.literal('text') }),
    columnSchema.extend({ semantic: z.literal('status') }),
    columnSchema.extend({ semantic: z.literal('managedBy') }),
    columnSchema.extend({ semantic: z.literal('tag') }),
    columnSchema.extend({ semantic: z.literal('address') }),
    columnSchema.extend({ semantic: z.literal('coordinates') }),
    columnSchema.extend({ semantic: z.literal('phone') }),
    columnSchema.extend({ semantic: z.literal('submitDate') }),
    columnSchema.extend({ semantic: z.literal('updateDate') }),
    columnSchema.extend({ semantic: z.literal('updatedBy') }),
    columnSchema.extend({ semantic: z.literal('deadlineDate') }),
  ])
  .rest(columnSchema)

export type Column = z.infer<typeof columnSchema>

export const labeledColumnsSchema = columnsSchema
  .transform(columns => {
    return columns.reduce(
      (prev, column) => {
        return {
          ...prev,
          [column.semantic]: column,
        }
      },
      {} as Record<keyof AppealAPIData, Column>,
    )
  })
  .refine(
    data =>
      z.record(appealAPIDataSchema.keyof(), columnSchema).safeParse(data)
        .success,
  )

export type LabeledColumns = z.infer<typeof labeledColumnsSchema>
