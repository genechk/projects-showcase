import { defineCollection } from 'astro:content'
import { projectSchema } from '../schemas/project-schema'

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    projectSchema.extend({
      image: image(),
    }),
})

export const collections = {
  projects: projectsCollection,
}
