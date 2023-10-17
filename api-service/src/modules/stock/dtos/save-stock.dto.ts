import { TStockResponse } from './stock-response.dto'

export type TStockResponseLowerCase = {
  [K in keyof TStockResponse as Lowercase<K>]: K extends
    | 'Open'
    | 'High'
    | 'Low'
    | 'Close'
    | 'Volume'
    ? number
    : TStockResponse[K]
}

export type TSaveStockDTO = TStockResponseLowerCase & {
  userId: string
}
