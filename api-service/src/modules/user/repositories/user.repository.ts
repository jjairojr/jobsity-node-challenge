import { PrismaClient } from '@prisma/client'
import { IUserRepository } from './interfaces/user.repository.interface'
import { RegisterUserDTO } from '../dtos'

class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: RegisterUserDTO) {
    return this.prisma.user.create({
      data: {
        email: data.email,
        role: data.role,
        password_hash: data.password_hash,
      },
    })
  }
}

export { UserRepository }
