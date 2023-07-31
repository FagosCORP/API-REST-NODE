// leu o arquivo e jogou todas as informacoes
import { config } from 'dotenv'
import { z } from 'zod'
// criar um schema de dados que eu necessito ter
// para todas as variaveis se for o vitest ele ja preenche as variavies como TEST

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('warning: Invalid enviroment variables!', _env.error.format())
  throw new Error('Invalid enviroment variables!')
}

// chamando o parse de baixo dos panos ele esta somente fazendo
// ele ja esta automaticamente fazendo uma validacao de fato
// checando tudo para ver se esta ok ou nao o schema
// se der certo o codigo executa

export const env = _env.data
