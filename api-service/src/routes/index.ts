import { app } from '@/app'
import { userRoutes } from './user.routes'
import { stockRoutes } from './stock.routes'
import { authenticateRoutes } from './authenticate.routes'

export function registerRoutes() {
  app.register(userRoutes, { prefix: '/users', logLevel: 'info' })
  app.register(authenticateRoutes, { prefix: '/auth', logLevel: 'info' })
  app.register(stockRoutes, { prefix: '/stock', logLevel: 'info' })
}
