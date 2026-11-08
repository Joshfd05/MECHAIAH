import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tagline: z.string(),
    outcome: z.string(),
    role: z.string(),
    summary: z.string(),
    problem: z.string(),
    built: z.string(),
    stack: z.array(z.string()).default([]),
    url: z.string().optional(),
    shots: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          label: z.string(),
        }),
      )
      .default([]),
    order: z.number(),
    motif: z.enum(['wear', 'work', 'stock']),
  }),
});

export const collections = { projects };
