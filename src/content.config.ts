import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/events' }),
  schema: z.object({
    number: z.number().int().positive(),
    startDate: z.string(),
    endDate: z.string(),
    date: z.string(),
    place: z.string(),
    status: z.string(),
    venue: z.string(),
    access: z.string(),
  }),
});

export const collections = { events };
