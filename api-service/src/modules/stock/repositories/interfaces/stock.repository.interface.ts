import { Stock } from '@prisma/client'
import { TSaveStockDTO } from '../../dtos/save-stock.dto'

export type IStockRepository = {
  create: (data: TSaveStockDTO) => Promise<Stock>
  findAll: (userId: string) => Promise<Stock[]>
  countBySymbolName: () => Promise<
    { _count: { symbol: number }; symbol: string }[]
  >
}
