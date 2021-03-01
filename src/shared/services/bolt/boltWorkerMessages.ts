/*
 * Copyright (c) 2002-2021 "neo4j ,"
 * neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of  neo4j.
 *
 * neo4j  is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { recursivelyTypeGraphItems } from './boltMappings'
import { ROUTED_WRITE_CONNECTION } from './boltConnection'

export const RUN_CYPHER_MESSAGE = 'RUN_CYPHER_MESSAGE'
export const CANCEL_TRANSACTION_MESSAGE = 'CANCEL_TRANSACTION_MESSAGE'
export const CYPHER_ERROR_MESSAGE = 'CYPHER_ERROR_MESSAGE'
export const CYPHER_RESPONSE_MESSAGE = 'CYPHER_RESPONSE_MESSAGE'
export const POST_CANCEL_TRANSACTION_MESSAGE = 'POST_CANCEL_TRANSACTION_MESSAGE'
export const BOLT_CONNECTION_ERROR_MESSAGE = 'BOLT_CONNECTION_ERROR_MESSAGE'
export const CLOSE_CONNECTION_MESSAGE = 'CLOSE_CONNECTION_MESSAGE'

export const runCypherMessage = (
  input: any,
  parameters: any,
  connectionType = ROUTED_WRITE_CONNECTION,
  requestId = null,
  cancelable = false,
  connectionProperties: any
) => {
  return {
    type: RUN_CYPHER_MESSAGE,
    input,
    parameters,
    connectionType,
    requestId,
    cancelable,
    connectionProperties
  }
}

export const cancelTransactionMessage = (id: any) => {
  return {
    type: CANCEL_TRANSACTION_MESSAGE,
    id
  }
}

export const cypherResponseMessage = (result: any) => {
  return {
    type: CYPHER_RESPONSE_MESSAGE,
    result: recursivelyTypeGraphItems(result)
  }
}

export const cypherErrorMessage = (error: any) => {
  return {
    type: CYPHER_ERROR_MESSAGE,
    error
  }
}

export const postCancelTransactionMessage = () => {
  return {
    type: POST_CANCEL_TRANSACTION_MESSAGE
  }
}

export const boltConnectionErrorMessage = (error: any) => {
  return {
    type: BOLT_CONNECTION_ERROR_MESSAGE,
    error
  }
}

export const closeConnectionMessage = () => ({
  type: CLOSE_CONNECTION_MESSAGE
})