import { v4 as uuid } from 'uuid'
import { RegisterUserDTO } from '../../dtos'
import { hash } from 'bcryptjs'
import ConflictException from '@/exceptions/conflict.exception'
import { UserRepository } from '../../repositories/UserRepository'

class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ role, email }: RegisterUserDTO): Promise<{
    email: string
    password: string
  }> {
    const password = this.generateRandomPassword()
    const passwordHash = await hash(password, 8)

    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) throw new ConflictException('User already exists')

    const user = await this.userRepository.create({
      email,
      role,
      password_hash: passwordHash,
    })

    return {
      email: user.email,
      password,
    }
  }

  private generateRandomPassword() {
    return uuid()
  }
}

export { RegisterUserUseCase }
