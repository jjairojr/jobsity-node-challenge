import { env } from '@/env'
import axios from 'axios'
import csv from 'csv-parser'

export async function fetchStock(stock: string) {
  let result: unknown

  const response = await axios.get(
    `${env.API_STOCK_URL}?s=${stock}&f=sd2t2ohlcvn&h&e=csv`,
  )

  csv({
    separator: ',',
  })
    .on('data', (data) => {
      result = data
    })
    .write(response.data)
  return result
}
