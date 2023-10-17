import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { getPrisma } from '@/lib/prisma'
import { makeGetStockUseCase } from '../../use-cases/factories/make-get-stock.usecase'

class GetStockController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const prisma = getPrisma()
    const userId = request.user.sub

    const getStockQuerySchema = z.object({
      q: z.string(),
    })

    const { q } = getStockQuerySchema.parse(request.query)

    const getStockUseCase = makeGetStockUseCase(prisma)

    const stock = await getStockUseCase.execute({ stock: q, userId })

    const { symbol, name, low, high, open, close, volume, time, date } = stock

    const stockResponse = {
      symbol,
      name,
      low,
      high,
      open,
      close,
      volume,
      time,
      date,
    }

    return reply.status(200).send(stockResponse)
  }
}

export default new GetStockController()
