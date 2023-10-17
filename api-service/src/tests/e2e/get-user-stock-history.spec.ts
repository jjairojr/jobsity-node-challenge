import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'
import {
  authenticateUser,
  getStock,
  getUserStockHistory,
  registerUser,
} from './requests'
import { TUserTest } from './types'
import AxiosMockAdapter from 'axios-mock-adapter'
import { api } from '@/lib/axios'
import { generateMockResponse, getStockMock } from '../mocks/stock.mock'

describe('Get User Stock History', () => {
  let user = {} as TUserTest
  let axiosMock: AxiosMockAdapter
  beforeAll(async () => {
    axiosMock = new AxiosMockAdapter(api)
    await app.ready()
  })

  afterAll(async () => {
    axiosMock.restore()
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

    user.token = response.body.token

    expect(response.status).toBe(200)
    expect(response.body.token).toEqual(expect.any(String))
  })

  test('should be able to get stock', async () => {
    const stockCodes = ['aapl.us', 'f.us', 'goog.us', 'msft.us']

    await Promise.all(
      stockCodes.map(async (stockCode) => {
        getStockMock(axiosMock, stockCode)
        const response = await getStock(app, user.token, stockCode)

        expect(response.body).toEqual(
          generateMockResponse(stockCode).data.stock,
        )
      }),
    )
  })

  test('should be able to list user stock history', async () => {
    const response = await getUserStockHistory(app, user.token)

    expect(response.status).toEqual(200)
  })
})
