import { User } from '@prisma/client'
import { RegisterUserWithPassHashDTO } from '../../dtos/register-user.dto'

export type IUserRepository = {
  create: (data: RegisterUserWithPassHashDTO) => Promise<User>
  findByEmail: (email: string) => Promise<User | null>
  findById: (id: string) => Promise<User | null>
}
