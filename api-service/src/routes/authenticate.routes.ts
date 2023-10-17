import { AuthenticateUserController } from '@/modules/user/controllers/AuthenticateUserController'
import { $ref } from '@/modules/user/schemas/user.schema'
import { FastifyInstance } from 'fastify'

export async function authenticateRoutes(app: FastifyInstance) {
  app.post(
    '/',
    {
      schema: {
        body: $ref('authenticateUserSchema'),
        response: {
          200: $ref('authenticateUserResponseSchema'),
        },
      },
    },
    AuthenticateUserController.handle,
  )
}
