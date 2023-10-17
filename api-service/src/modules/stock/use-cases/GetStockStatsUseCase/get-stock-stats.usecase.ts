import { StockRepository } from '../../repositories/StockRepository'
import { UserRepository } from '@/modules/user/repositories/UserRepository'
import ForbiddenException from '@/exceptions/forbidden.exception'
import { UserRole } from '@prisma/client'
import { GetStockStatsDTO } from '../../dtos/get-stock-stats.dto'

class GetStockStatsUseCase {
  constructor(
    private readonly stockRepository: StockRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async execute({ userId }: GetStockStatsDTO) {
    const user = await this.userRepository.findById(userId)

    if (user.role !== UserRole.ADMIN)
      throw new ForbiddenException('User is not admin')

    const stockStats = await this.stockRepository.countBySymbolName()

    return stockStats
  }
}

export { GetStockStatsUseCase }
