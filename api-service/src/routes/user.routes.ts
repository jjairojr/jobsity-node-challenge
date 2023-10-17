import { FastifyInstance } from 'fastify'
import { RegisterUserController } from '../modules/user/controllers/RegisterUserController'
import { GetUserStockHistoryController } from '@/modules/user/controllers/GetUserStockHistoryController'
import { verifyJWT } from '@/middlewares/verify-jwt.middleware'
import { $ref } from '@/modules/user/schemas/user.schema'

export async function userRoutes(app: FastifyInstance) {
  app.post(
    '/register',
    {
      schema: {
        body: $ref('createUserSchema'),
        response: {
          201: $ref('createUserResponseSchema'),
        },
      },
    },
    RegisterUserController.handle,
  )

  app.get(
    '/history',
    {
      onRequest: [verifyJWT],
      schema: { response: { 200: $ref('getUserStockHistoryResponseSchema') } },
    },
    GetUserStockHistoryController.handle,
  )
}
