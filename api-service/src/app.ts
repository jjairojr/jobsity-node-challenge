import fastify from 'fastify'
import { ZodError } from 'zod'
import BaseError from './exceptions/base-error'
import { env } from './env'
import { registerRoutes } from './routes'
import fastifyJwt from '@fastify/jwt'
import { userSchemas } from './modules/user/schemas/user.schema'
import { withRefResolver } from 'fastify-zod'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'
import { stockSchemas } from './modules/stock/schemas/stock.schema'
import { version } from '../package.json'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

for (const schema of [...userSchemas, ...stockSchemas]) {
  app.addSchema(schema)
}

app.register(
  swagger,
  withRefResolver({
    swagger: {
      info: {
        title: 'Jobsity API',
        description: 'API to get stock',
        version,
      },
    },
  }),
)

app.register(swaggerUI, {
  routePrefix: '/docs',
})

registerRoutes()

app.setErrorHandler((error, _, reply) => {
  const status = error instanceof BaseError ? error.status : 500
  const details = error instanceof BaseError ? error.errors : {}

  if (error.validation) {
    return reply.status(400).send({
      message: 'Validation failed',
      errors: error,
    })
  }

  if (env.NODE_ENV === 'dev') {
    console.log(error)
  }

  return reply.status(status).send({ message: error.message, details })
})
