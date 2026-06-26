import { z } from 'zod';

export const projectStatusSchema = z.enum(['DESIGN', 'IN_PROGRESS', 'COMPLETED']);

export const projectImageInputSchema = z.object({
  url: z.string().trim().url().max(2048),
  alt: z.string().trim().min(2).max(240),
  sortOrder: z.number().int().min(0).max(1000).default(0),
});

export const projectInputSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(3)
    .max(160)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().trim().min(3).max(180),
  description: z.string().trim().min(20).max(4000),
  status: projectStatusSchema.default('IN_PROGRESS'),
  location: z.string().trim().max(180).optional(),
  deliveryAt: z.string().datetime().optional(),
  isPublished: z.boolean().default(false),
  gallery: z.array(projectImageInputSchema).max(24).default([]),
});

export type ProjectInput = z.infer<typeof projectInputSchema>;
