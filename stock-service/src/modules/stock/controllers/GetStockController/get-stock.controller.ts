import { fetchStock } from '@/services/fetch-stock.service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { GetStockInput } from '../../schemas/stock.schema'

class GetStockController {
  async handle(
    request: FastifyRequest<{ Querystring: GetStockInput }>,
    reply: FastifyReply,
  ) {
    const { stock } = request.query as { stock: string }

    const fetchedStock = await fetchStock(stock)

    return reply.status(200).send({ stock: fetchedStock })
  }
}

export default new GetStockController()
