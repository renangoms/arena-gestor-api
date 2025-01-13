import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  dbURL: z.string().min(1),
  jwtSecret: z.string().min(1),
  frontendUrl: z
    .string()
    .refine(
      (url) => url.startsWith('http') || url.startsWith('https'),
      'Invalid URL format',
    ),
});

type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse({
  dbURL: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  frontendUrl: process.env.FRONT_URL,
});
