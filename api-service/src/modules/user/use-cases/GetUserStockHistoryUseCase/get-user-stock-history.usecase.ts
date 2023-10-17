import { StockRepository } from '@/modules/stock/repositories/StockRepository'
import { GetUserStockHistoryDTO } from '../../dtos/get-user-stock-history.dto'
import { Stock } from '@prisma/client'

class GetUserStockHistoryUseCase {
  constructor(private readonly stockRepository: StockRepository) {}

  async execute({ userId }: GetUserStockHistoryDTO): Promise<Stock[]> {
    const userStockHistory = await this.stockRepository.findAll(userId)

    return userStockHistory
  }
}

export { GetUserStockHistoryUseCase }
