import { verifyJWT } from '@/middlewares/verify-jwt.middleware'
import { GetStockController } from '@/modules/stock/controllers/GetStockController'
import { GetStockStatsController } from '@/modules/stock/controllers/GetStockStatsController'
import { FastifyInstance } from 'fastify'

export async function stockRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)
  app.get('/', GetStockController.handle)

  app.get('/stats', GetStockStatsController.handle)
}
