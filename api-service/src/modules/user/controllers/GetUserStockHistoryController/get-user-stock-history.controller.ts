import { FastifyReply, FastifyRequest } from 'fastify'
import { getPrisma } from '@/lib/prisma'
import { makeGetUserStockHistoryUseCase } from '../../use-cases/factories/make-get-user-stock-history.usecase'

class GetUserStockHistoryController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const prisma = getPrisma()

    const userId = request.user.sub

    const getUserStockHistoryUseCase = makeGetUserStockHistoryUseCase(prisma)

    const userStockHistory = await getUserStockHistoryUseCase.execute({
      userId,
    })

    return reply.status(200).send(userStockHistory)
  }
}

export default new GetUserStockHistoryController()
