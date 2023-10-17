import { PrismaClient } from '@prisma/client'
import { RegisterUserUseCase } from '../RegisterUserUseCase'
import { UserRepository } from '../../repositories/UserRepository'

export function makeRegisterUserUseCase(prisma: PrismaClient) {
  const userRepository = new UserRepository(prisma)
  const registerUserUseCase = new RegisterUserUseCase(userRepository)

  return registerUserUseCase
}
