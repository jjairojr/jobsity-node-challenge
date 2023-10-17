import { PrismaClient } from '@prisma/client'
import { StockRepository } from '@/modules/stock/repositories/StockRepository'
import { GetUserStockHistoryUseCase } from '../GetUserStockHistoryUseCase'

export function makeGetUserStockHistoryUseCase(prisma: PrismaClient) {
  const stockRepository = new StockRepository(prisma)
  const registerUserUseCase = new GetUserStockHistoryUseCase(stockRepository)

  return registerUserUseCase
}
