import NotFoundException from '@/exceptions/not-found.exception'
import { compare } from 'bcryptjs'
import ValidationException from '@/exceptions/validation.exception'
import { AutheticateUserDTO } from '../../dtos/authenticate-user.dto'
import { UserRepository } from '../../repositories/UserRepository'

class AuthenticateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async execute({ email, password }: AutheticateUserDTO) {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new NotFoundException('User not found')
    }

    const doesPasswordMatch = await compare(password, user.password_hash)

    if (!doesPasswordMatch) {
      throw new ValidationException('Invalid credentials')
    }

    return user
  }
}

export { AuthenticateUserUseCase }
