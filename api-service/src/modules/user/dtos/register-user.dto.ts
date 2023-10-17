import { type UserRole } from '@prisma/client'

export type RegisterUserDTO = {
  email: string
  role: UserRole
}

export type RegisterUserWithPassHashDTO = RegisterUserDTO & {
  password_hash: string
}
