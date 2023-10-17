import BaseError from './base-error'
import { HttpExceptionEnum } from './interfaces'

export default class ValidationException extends BaseError {
  public message: string

  public errors: unknown

  public status: number

  constructor(message?: string, errors?: unknown, status = 422) {
    super(message)
    this.message = message || HttpExceptionEnum.UNPROCESSED_ENTITY
    this.errors = errors || {}
    this.status = status
  }
}
