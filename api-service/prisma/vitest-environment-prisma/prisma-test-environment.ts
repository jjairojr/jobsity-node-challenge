import { PrismaClient } from '@prisma/client'
import 'dotenv/config'
import { execSync } from 'node:child_process'

import { randomUUID } from 'node:crypto'
import { Environment } from 'vitest'

const prisma = new PrismaClient()

function generateDatabaseURl(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Missing DATABASE_URL')
  }

  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schema)

  return url.toString()
}

export default <Environment>{
  transformMode: 'web',
  name: 'prisma',
  async setup() {
    const schema = randomUUID()

    const databaseURL = generateDatabaseURl(schema)

    process.env.DATABASE_URL = databaseURL
    process.env.NODE_ENV = 'test'

    execSync('npx prisma migrate deploy')

    return {
      async teardown() {
        await prisma.$executeRawUnsafe(
          `DROP SCHEMA IF EXISTS "${schema}" CASCADE;`,
        )

        await prisma.$disconnect()
      },
    }
  },
}
