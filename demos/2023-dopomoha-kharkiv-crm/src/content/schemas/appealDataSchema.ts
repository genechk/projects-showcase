import z from 'zod'

export const appealAPIDataSchema = z.object({
  appealId: z.string(),
  type: z.string().optional(),
  text: z.string().optional(),
  status: z.string().optional(),
  managedBy: z.string().optional(),
  tag: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  submitDate: z.string().optional(),
  coordinates: z.string().optional(),

  updateDate: z.string().optional(),
  updatedBy: z.string().optional(),
  deadlineDate: z.string().optional(),
  contactName: z.string().optional(),
  circumstances: z.string().optional(),
  medicalData: z.string().optional(),
  updateHistory: z.string().optional(),
  medicineList: z.string().optional(),
  foodRations: z.string().optional(),
  hygieneKits: z.string().optional(),
  babyCare: z.string().optional(),
  petFood: z.string().optional(),
  budget: z.string().optional(),

  commencementDate: z.string().optional(),
  completionDate: z.string().optional(),
  volunteer: z.string().optional(),
  aidHistory: z.string().optional(),
  volunteersComment: z.string().optional(),
  photos: z.string().optional(),
  receipts: z.string().optional(),
  verificationSheet: z.string().optional(),
  additionalComment: z.string().optional(),
} as const)

export type AppealAPIData = z.infer<typeof appealAPIDataSchema>
