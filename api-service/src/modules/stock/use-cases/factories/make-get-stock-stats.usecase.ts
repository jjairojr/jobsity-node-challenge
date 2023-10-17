import { PrismaClient } from '@prisma/client'
import { StockRepository } from '../../repositories/StockRepository'
import { UserRepository } from '@/modules/user/repositories/UserRepository'
import { GetStockStatsUseCase } from '../GetStockStatsUseCase'

export function makeGetStockStatsUseCase(prisma: PrismaClient) {
  const stockRepository = new StockRepository(prisma)
  const userRepository = new UserRepository(prisma)

  const getStockUseCase = new GetStockStatsUseCase(
    stockRepository,
    userRepository,
  )

  return getStockUseCase
}
