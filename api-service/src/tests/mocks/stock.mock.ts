import AxiosMockAdapter from 'axios-mock-adapter'

export function getStockMock(axiosMock: AxiosMockAdapter, stockCode: string) {
  axiosMock.onGet(`/?stock=${stockCode}`).reply(200, {
    stock: {
      Symbol: stockCode.toUpperCase(),
      Date: '2023-09-29',
      Time: '22:00:15',
      Open: '172.02',
      High: '173.07',
      Low: '170.341',
      Close: '171.21',
      Volume: '51861083',
      Name: stockCode.toUpperCase(),
    },
  })
}

export function generateMockResponse(stockCode: string): {
  status: number
  data: any
} {
  return {
    status: 200,
    data: {
      stock: {
        symbol: stockCode.toUpperCase(),
        date: '2023-09-29',
        time: '22:00:15',
        open: 172.02,
        high: 173.07,
        low: 170.341,
        close: 171.21,
        volume: 51861083,
        name: stockCode.toUpperCase(),
      },
    },
  }
}
