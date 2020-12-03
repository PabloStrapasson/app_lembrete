//@flow

import jwt from 'jsonwebtoken'
import type {Token, TokenDecodificado} from './tipos_flow'

const SENHA = process.env.SENHA_JWT
const DURACAO = process.env.DURACAO_JWT
function geraToken (login: string): Token {
  return jwt.sign({ login }, SENHA, { expiresIn: DURACAO })
}

function validaToken (token: Token): TokenDecodificado | null {
  try {
    const dados: TokenDecodificado = jwt.verify(token, SENHA)
    return dados
  } catch (e) {
    return null
  }
}

export { geraToken, validaToken }
