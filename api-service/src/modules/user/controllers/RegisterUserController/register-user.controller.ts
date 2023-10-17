import { FastifyReply, FastifyRequest } from 'fastify'
import { makeRegisterUserUseCase } from '../../use-cases/factories/make-register-user.usecase'
import { getPrisma } from '@/lib/prisma'
import { CreateUserInput } from '../../schemas/user.schema'

class RegisterUserController {
  async handle(
    request: FastifyRequest<{ Body: CreateUserInput }>,
    reply: FastifyReply,
  ) {
    const prisma = getPrisma()

    const { email, role } = request.body

    const registerUserUseCase = makeRegisterUserUseCase(prisma)

    const user = await registerUserUseCase.execute({ email, role })

    return reply
      .status(201)
      .send({ email: user.email, password: user.password })
  }
}

export default new RegisterUserController()
