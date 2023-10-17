import { buildJsonSchemas } from 'fastify-zod'
import { z } from 'zod'

const getStockStatsResponseSchema = z.object({
  stock: z.string(),
  times_requested: z.number(),
})

const getStockResponseSchema = z.object({
  symbol: z.string(),
  name: z.string(),
  price: z.number(),
  low: z.number(),
  high: z.number(),
  open: z.number(),
  close: z.number(),
  volume: z.number(),
  time: z.string(),
  date: z.string(),
})

export const { schemas: stockSchemas, $ref } = buildJsonSchemas(
  {
    getStockResponseSchema,
    getStockStatsResponseSchema,
  },
  {
    $id: 'stock_schema',
  },
)
