import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { transactionRoutes } from './routes/transactions'
export const app = fastify()
// GET, POST, PUT e DELETE
// posso passar o prefix que vai ser utilizado
app.register(cookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})
