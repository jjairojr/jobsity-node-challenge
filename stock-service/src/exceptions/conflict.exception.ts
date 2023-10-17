import BaseError from './base-error'
import { HttpExceptionEnum } from './interfaces'

export default class ConflictException extends BaseError {
  public message: string

  public errors: unknown

  public status: number

  constructor(message?: string, errors?: unknown, status = 409) {
    super(message)
    this.message = message || HttpExceptionEnum.CONFLICT
    this.errors = errors || {}
    this.status = status
  }
}
