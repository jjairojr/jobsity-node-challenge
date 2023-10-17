import { PrismaClient } from '@prisma/client'
import { GetStockUseCase } from '../GetStockUseCase'
import { StockRepository } from '../../repositories/StockRepository'

export function makeGetStockUseCase(prisma: PrismaClient) {
  const stockRepository = new StockRepository(prisma)
  const getStockUseCase = new GetStockUseCase(stockRepository)

  return getStockUseCase
}
