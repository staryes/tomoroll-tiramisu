import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const members = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/members' }),
  schema: z.object({
    name: z.string().min(1),
    role: z.string().min(1),
    photo: z.string().startsWith('/').optional(),
    photoAlt: z.string().optional(),
    bio: z.string().min(1),
    order: z.number().int().nonnegative().default(99),
    published: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    cover: z.string().startsWith('/'),
    coverAlt: z.string().min(1),
    client: z.string().min(1),
    year: z.number().int().min(2000).max(2100),
    services: z.array(z.string()).min(1),
    featured: z.boolean().default(false),
    published: z.boolean().default(false),
    order: z.number().int().nonnegative().default(99),
  }),
});

export const collections = { members, projects };
