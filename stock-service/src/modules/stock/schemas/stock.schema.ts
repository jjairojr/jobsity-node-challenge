import { buildJsonSchemas } from 'fastify-zod'
import { z } from 'zod'

const stock = z.any()

const getStockResponseSchema = z.object({
  stock: z.object({
    Symbol: z.string(),
    Name: z.string(),
    Low: z.number(),
    High: z.number(),
    Open: z.number(),
    Close: z.number(),
    Volume: z.number(),
    Time: z.string(),
    Date: z.string(),
  }),
})

export type GetStockInput = z.infer<typeof stock>

export const { schemas: stockSchemas, $ref } = buildJsonSchemas(
  {
    stock,
    getStockResponseSchema,
  },
  {
    $id: 'stock_schema',
  },
)
