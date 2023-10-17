import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'
import { UserRole } from '@prisma/client'

const userCore = {
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email(),
  role: z.enum([UserRole.USER, UserRole.ADMIN]),
}

const createUserSchema = z.object({
  ...userCore,
})

const createUserResponseSchema = z.object({
  email: z.string(),
  password: z.string(),
})

const authenticateUserSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email(),
  password: z.string(),
})

const authenticateUserResponseSchema = z.object({
  token: z.string(),
})

const getUserStockHistoryResponseSchema = z
  .object({
    symbol: z.string(),
    date: z.string(),
    time: z.string(),
    open: z.number(),
    high: z.number(),
    low: z.number(),
    close: z.number(),
    volume: z.number(),
    name: z.string(),
  })
  .array()

export type CreateUserInput = z.infer<typeof createUserSchema>

export type AuthenticateUserInput = z.infer<typeof authenticateUserSchema>

export const { schemas: userSchemas, $ref } = buildJsonSchemas(
  {
    createUserSchema,
    createUserResponseSchema,
    authenticateUserSchema,
    authenticateUserResponseSchema,
    getUserStockHistoryResponseSchema,
  },
  { $id: 'user_schema' },
)
