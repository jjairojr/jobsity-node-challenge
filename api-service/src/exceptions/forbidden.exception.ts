import BaseError from './base-error'
import { HttpExceptionEnum } from './interfaces'

export default class ForbiddenException extends BaseError {
  public readonly message: string
  public readonly errors: unknown
  public readonly status: number

  constructor(message?: string, errors?: unknown, status = 403) {
    super(message)
    this.message = message || HttpExceptionEnum.FORBIDDEN
    this.errors = errors || {}
    this.status = status
  }
}
