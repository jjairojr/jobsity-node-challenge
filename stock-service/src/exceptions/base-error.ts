import { HttpExceptionEnum } from './interfaces'

export default class BaseError extends Error {
  public readonly message: string
  public readonly errors: unknown
  public readonly status: number

  constructor(message?: string, errors?: unknown, status = 500) {
    super(message)
    this.message = message || HttpExceptionEnum.INTERNAL_ERROR
    this.errors = errors || {}
    this.status = status
  }
}
