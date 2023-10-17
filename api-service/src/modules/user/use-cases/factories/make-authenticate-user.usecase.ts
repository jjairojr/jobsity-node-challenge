import { PrismaClient } from '@prisma/client'
import { AuthenticateUserUseCase } from '../AuthenticateUserUsecase'
import { UserRepository } from '../../repositories/UserRepository'

export async function makeAuthenticateUseCase(prisma: PrismaClient) {
  const userRepository = new UserRepository(prisma)
  const authenticateUseCase = new AuthenticateUserUseCase(userRepository)

  return authenticateUseCase
}
