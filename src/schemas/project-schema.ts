import { z, type ImageFunction } from 'astro:content'

export const projectSchema = z.object({
  title: z.string(),
  thumbnail: z.string(),
  description: z.string(),
  employerName: z.string(),
  employerURL: z.string().optional(),
  role: z.string().optional(),
  goal: z.string().optional(),
  delivered: z.string().array(),
  details: z.string().optional(),
  codeSandboxURL: z.string().optional(),
  githubURL: z.string().url().optional(),
  productionURL: z.string().url().optional(),
  productionCaption: z.string().optional(),
  demoURL: z.string().optional(),
  demoCaption: z.string().optional(),
  productDescriptionURL: z.string().optional(),
  productDescriptionCaption: z.string().optional(),
  startDate: z.date(),
  endDate: z.date(),
  tags: z.array(z.string()),
})

export type Project = z.infer<typeof projectSchema> & {
  image: ReturnType<ImageFunction>
}
