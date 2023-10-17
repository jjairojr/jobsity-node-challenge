import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'
import { registerUser } from './requests'

describe('Create User', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('should NOT be able to create a user with invalid email', async () => {
    const response = await registerUser(app, {
      email: 'jj.com',
      role: 'USER',
    })

    expect(response.status).toEqual(400)
  })

  test('should be able to create a new user', async () => {
    const response = await registerUser(app, {
      email: 'jj@g.com',
      role: 'USER',
    })

    expect(response.status).toEqual(201)
    expect(response.body).toEqual({
      email: 'jj@g.com',
      password: expect.any(String),
    })
  })

  test('should NOT be able to create a user with same email', async () => {
    const response = await registerUser(app, {
      email: 'jj@g.com',
      role: 'USER',
    })

    expect(response.status).toEqual(409)
  })
})
