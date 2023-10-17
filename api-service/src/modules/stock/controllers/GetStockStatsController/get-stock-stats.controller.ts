import { FastifyReply, FastifyRequest } from 'fastify'
import { getPrisma } from '@/lib/prisma'
import { makeGetStockStatsUseCase } from '../../use-cases/factories/make-get-stock-stats.usecase'

class GetStockStatsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const prisma = getPrisma()
    const userId = request.user.sub

    const getStockStatusUseCase = makeGetStockStatsUseCase(prisma)

    const stockStatus = await getStockStatusUseCase.execute({ userId })

    const formattedStockStatus = stockStatus.map((stock) => ({
      stock: stock.symbol,
      times_requested: stock._count.symbol,
    }))

    return reply.status(200).send(formattedStockStatus)
  }
}

export default new GetStockStatsController()
