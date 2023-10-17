import BaseError from './base-error'
import { HttpExceptionEnum } from './interfaces'

export default class NotFoundException extends BaseError {
  public readonly message: string
  public readonly errors: unknown
  public readonly status: number

  constructor(message?: string, errors?: unknown, status = 404) {
    super(message)
    this.message = message || HttpExceptionEnum.NOT_FOUND
    this.errors = errors || {}
    this.status = status
  }
}
