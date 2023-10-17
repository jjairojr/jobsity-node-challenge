import { app } from '@/app'
import { stockRoutes } from './stock.routes'

export function registerRoutes() {
  app.register(stockRoutes, { prefix: '/', logLevel: 'info' })
}
