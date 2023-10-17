import { PrismaClient, Stock } from '@prisma/client'
import { TSaveStockDTO } from '../../dtos/save-stock.dto'
import { IStockRepository } from '../interfaces/stock.repository.interface'

class StockRepository implements IStockRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: TSaveStockDTO): Promise<Stock> {
    return this.prisma.stock.create({
      data: {
        symbol: data.symbol,
        name: data.name,
        low: data.low,
        high: data.high,
        open: data.open,
        time: data.time,
        close: data.close,
        volume: data.volume,
        date: data.date,

        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    })
  }

  async findAll(userId: string): Promise<Stock[]> {
    return this.prisma.stock.findMany({
      where: {
        user_id: userId,
      },
    })
  }

  async countBySymbolName() {
    return this.prisma.stock.groupBy({
      by: ['symbol'],
      _count: {
        symbol: true,
      },
    })
  }
}

export { StockRepository }
