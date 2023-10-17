import { GetStockController } from '@/modules/stock/controllers/GetStockController'
import { $ref } from '@/modules/stock/schemas/stock.schema'
import { FastifyInstance } from 'fastify'

export async function stockRoutes(app: FastifyInstance) {
  app.get(
    '',
    {
      schema: {
        querystring: $ref('stock'),
        response: {
          200: $ref('getStockResponseSchema'),
        },
      },
    },
    GetStockController.handle,
  )
}
