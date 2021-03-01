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

import neo4j from 'neo4j-driver'
import { v4 } from 'uuid'
import { getGlobalDrivers } from './globalDrivers'
import { buildTxFunctionByMode } from './boltHelpers'
import { BoltConnectionError, createErrorObject } from '../exceptions'

const runningQueryRegister: any = {}

function _trackedTransaction(
  input: any,
  parameters = {},
  session: any,
  requestId = null,
  txMetadata = undefined,
  autoCommit = false
) {
  const id = requestId || v4()
  if (!session) {
    return [id, Promise.reject(createErrorObject(BoltConnectionError))]
  }
  const closeFn = (cb = () => {}) => {
    session.close(cb)
    if (runningQueryRegister[id]) delete runningQueryRegister[id]
  }
  runningQueryRegister[id] = closeFn

  const metadata = txMetadata ? { metadata: txMetadata } : undefined

  // Declare variable to store tx function in
  // so we can use same promise chain further down
  // for both types of tx functions
  let runFn

  // Transaction functions are the norm
  if (!autoCommit) {
    const txFn = buildTxFunctionByMode(session)
    // Use same fn signature as session.run
    runFn = (input: any, parameters: any, metadata: any) =>
      txFn((tx: any) => tx.run(input, parameters), metadata)
  } else {
    // Auto-Commit transaction, only used for PERIODIC COMMIT etc.
    runFn = session.run.bind(session)
  }

  const queryPromise = runFn(input, parameters, metadata)
    .then((result: any) => {
      closeFn()
      return result
    })
    .catch((e: any) => {
      closeFn()
      throw e
    })
  return [id, queryPromise]
}

function _transaction(
  input: any,
  parameters: any,
  session: any,
  txMetadata = undefined
) {
  if (!session) return Promise.reject(createErrorObject(BoltConnectionError))

  const metadata = txMetadata ? { metadata: txMetadata } : undefined
  const txFn = buildTxFunctionByMode(session)

  return txFn((tx: any) => tx.run(input, parameters), metadata)
    .then((r: any) => {
      session.close()
      return r
    })
    .catch((e: any) => {
      session.close()
      throw e
    })
}

export function cancelTransaction(id: any, cb: any) {
  if (runningQueryRegister[id]) {
    runningQueryRegister[id](cb)
  }
}

export function directTransaction(input: any, parameters: any, opts: any = {}) {
  const {
    requestId = null,
    cancelable = false,
    txMetadata = undefined,
    useDb = undefined
  } = opts
  const session = getGlobalDrivers()
    ? getGlobalDrivers()
        .getDirectDriver()
        .session({ defaultAccessMode: neo4j.session.WRITE, database: useDb })
    : false
  if (!cancelable) return _transaction(input, parameters, session, txMetadata)
  return _trackedTransaction(input, parameters, session, requestId, txMetadata)
}

export function routedReadTransaction(
  input: any,
  parameters: any,
  opts: any = {}
) {
  const {
    requestId = null,
    cancelable = false,
    txMetadata = undefined,
    useDb = undefined
  } = opts
  const session = getGlobalDrivers()
    ? getGlobalDrivers()
        .getRoutedDriver()
        .session({ defaultAccessMode: neo4j.session.READ, database: useDb })
    : false
  if (!cancelable) return _transaction(input, parameters, session, txMetadata)
  return _trackedTransaction(input, parameters, session, requestId, txMetadata)
}

export function routedWriteTransaction(
  input: any,
  parameters: any,
  opts: any = {}
) {
  const {
    requestId = null,
    cancelable = false,
    txMetadata = undefined,
    useDb = undefined,
    autoCommit = false
  } = opts
  const session = getGlobalDrivers()
    ? getGlobalDrivers()
        .getRoutedDriver()
        .session({ defaultAccessMode: neo4j.session.WRITE, database: useDb })
    : false
  if (!cancelable) return _transaction(input, parameters, session, txMetadata)
  return _trackedTransaction(
    input,
    parameters,
    session,
    requestId,
    txMetadata,
    autoCommit
  )
}
