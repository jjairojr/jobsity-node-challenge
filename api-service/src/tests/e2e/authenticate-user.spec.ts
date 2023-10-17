import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'
import { authenticateUser, registerUser } from './requests'
import { TUserTest } from './types'

describe('Authenticate User', () => {
  let user = {} as TUserTest
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('should be able to create a new user', async () => {
    const response = await registerUser(app, {
      email: 'jj@g.com',
      role: 'USER',
    })

    user = response.body

    expect(response.status).toEqual(201)
    expect(response.body).toEqual({
      email: 'jj@g.com',
      password: expect.any(String),
    })
  })

  test('should be able to authenticate a user', async () => {
    const response = await authenticateUser(app, {
      email: user.email,
      password: user.password,
    })

    expect(response.status).toBe(200)
    expect(response.body.token).toEqual(expect.any(String))
  })

  test('should NOT be able to authenticate a user if user dont exists', async () => {
    const response = await authenticateUser(app, {
      email: 'dont_exist@g.com',
      password: '123456',
    })

    expect(response.status).toBe(404)
  })

  test('should NOT be able to authenticate a user with wrong password', async () => {
    const response = await authenticateUser(app, {
      email: 'jj@g.com',
      password: '1234567',
    })

    expect(response.status).toBe(422)
  })
})
