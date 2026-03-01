import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    number: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { blog, projects };