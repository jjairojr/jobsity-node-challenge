import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'production', 'test']).default('dev'),
  PORT: z.coerce.number().default(3333),
  JWT_SECRET: z.string(),
  DATABASE_URL: z.string(),
  INTERN_STOCK_API_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)



if (!_env.success) {
  console.error('❌ Invalid enviroment variable', _env.error.format())

  throw new Error('Invalid enviroment variable')
}

export const env = _env.data
