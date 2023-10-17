import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function registerUser(app: FastifyInstance, payload: object) {
  const response = await request(app.server)
    .post('/users/register')
    .send(payload)

  return response
}

export async function authenticateUser(app: FastifyInstance, payload: object) {
  const response = await request(app.server).post('/auth').send(payload)

  return response
}

export async function getStock(
  app: FastifyInstance,
  token: string,
  stock: string,
) {
  const response = await request(app.server)
    .get(`/stock?q=${stock}`)
    .set('Authorization', `Bearer ${token}`)

  return response
}

export async function getUserStockHistory(app: FastifyInstance, token: string) {
  const response = await request(app.server)
    .get(`/users/history`)
    .set('Authorization', `Bearer ${token}`)

  return response
}

export async function getStockStats(app: FastifyInstance, token: string) {
  const response = await request(app.server)
    .get(`/stock/stats`)
    .set('Authorization', `Bearer ${token}`)

  return response
}
