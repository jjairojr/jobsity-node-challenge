import { api } from '@/lib/axios'
import { GetStockDTO } from '../../dtos'
import { TStockResponse } from '../../dtos/stock-response.dto'
import { StockRepository } from '../../repositories/StockRepository'

class GetStockUseCase {
  constructor(private readonly stockRepository: StockRepository) {}

  async execute({ stock, userId }: GetStockDTO) {
    const result = await api.get<{ stock: TStockResponse }>(`/?stock=${stock}`)

    const fetchedStock = result.data.stock

    const createdStock = await this.stockRepository.create({
      symbol: fetchedStock.Symbol,
      name: fetchedStock.Name,
      low: Number(fetchedStock.Low),
      high: Number(fetchedStock.High),
      open: Number(fetchedStock.Open),
      close: Number(fetchedStock.Close),
      volume: Number(fetchedStock.Volume),
      time: fetchedStock.Time,
      date: fetchedStock.Date,
      userId,
    })

    return createdStock
  }
}

export { GetStockUseCase }
