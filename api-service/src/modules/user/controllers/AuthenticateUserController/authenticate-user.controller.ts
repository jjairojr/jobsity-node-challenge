import { getPrisma } from '@/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeAuthenticateUseCase } from '../../use-cases/factories/make-authenticate-user.usecase'
import { AuthenticateUserInput } from '../../schemas/user.schema'

class AuthenticateController {
  async handle(
    request: FastifyRequest<{ Body: AuthenticateUserInput }>,
    reply: FastifyReply,
  ) {
    const prisma = getPrisma()

    const authenticateUserService = await makeAuthenticateUseCase(prisma)

    const { email, password } = request.body

    const user = await authenticateUserService.execute({
      email,
      password,
    })

    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id,
        },
      },
    )

    return reply.status(200).send({ token })
  }
}

export default new AuthenticateController()
