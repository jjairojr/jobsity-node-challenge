import { PrismaClient } from '@prisma/client'
import { RegisterUserWithPassHashDTO } from '../../dtos/register-user.dto'
import { IUserRepository } from '../interfaces/user.repository.interface'

class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: RegisterUserWithPassHashDTO) {
    return this.prisma.user.create({
      data: {
        email: data.email,
        role: data.role,
        password_hash: data.password_hash,
      },
    })
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    })
  }

  async findById(id: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    })
  }
}

export { UserRepository }
