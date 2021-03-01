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

import semver from 'semver'
import { getVersion, getActiveDbName } from '../dbMeta/dbMetaDuck'
import { getUseDb } from '../connections/connectionsDuck'
import { guessSemverVersion } from './featureDuck.utils'

const NEO4J_TX_METADATA_VERSION = '3.5.0-alpha01'
const NEO4J_4_0 = '4.0.0-alpha01'

export const FIRST_MULTI_DB_SUPPORT = NEO4J_4_0
// Keep the following as 3.4.0 as 3.5.X has a
// compatible bolt server.
export const FIRST_NO_MULTI_DB_SUPPORT = '3.4.0'

export const canSendTxMetadata = (state: any) => {
  const serverVersion = guessSemverVersion(getVersion(state))

  if (!semver.valid(serverVersion)) {
    return false
  }
  return semver.gt(serverVersion, NEO4J_TX_METADATA_VERSION)
}

export const getShowCurrentUserProcedure = (serverVersion: any) => {
  serverVersion = guessSemverVersion(serverVersion)

  const pre4 = 'CALL dbms.security.showCurrentUser()'
  if (!semver.valid(serverVersion)) {
    return pre4
  }
  if (semver.gte(serverVersion, NEO4J_4_0)) {
    return 'CALL dbms.showCurrentUser()'
  }
  return pre4
}

export const getDbClusterRole = (state: any) => {
  const pre4 = 'CALL dbms.cluster.role() YIELD role'
  const serverVersion = guessSemverVersion(getVersion(state))
  if (!semver.valid(serverVersion)) {
    return pre4
  }
  if (semver.gte(serverVersion, NEO4J_4_0)) {
    const db = getUseDb(state)
    return `CALL dbms.cluster.role("${db}") YIELD role`
  }
  return pre4
}

export const hasMultiDbSupport = (state: any) => {
  const serverVersion = guessSemverVersion(getVersion(state))
  if (!semver.valid(serverVersion)) {
    return false
  }
  if (semver.gte(serverVersion, NEO4J_4_0)) {
    return true
  }
  return false
}

export const getUsedDbName = (state: any) => {
  const serverVersion = guessSemverVersion(getVersion(state))
  if (!semver.valid(serverVersion)) {
    return undefined
  }
  if (semver.gte(serverVersion, NEO4J_4_0)) {
    return getUseDb(state)
  }
  return getActiveDbName(state)
}

export const getDefaultBoltScheme = (serverVersion: any) => {
  serverVersion = guessSemverVersion(serverVersion)
  const pre4 = 'bolt://'
  if (!semver.valid(serverVersion)) {
    return pre4
  }
  if (semver.gte(serverVersion, NEO4J_4_0)) {
    return 'neo4j://'
  }
  return pre4
}

export const changeUserPasswordQuery = (state: any, oldPw: any, newPw: any) => {
  const pre4 = {
    query: 'CALL dbms.security.changePassword($password)',
    parameters: { password: newPw }
  }
  const serverVersion = guessSemverVersion(getVersion(state))
  if (!semver.valid(serverVersion)) {
    return pre4
  }
  if (semver.gte(serverVersion, NEO4J_4_0)) {
    return {
      query: 'ALTER CURRENT USER SET PASSWORD FROM $oldPw TO $newPw',
      parameters: { oldPw, newPw }
    }
  }
  return pre4
}

export const driverDatabaseSelection = (state: any, database: any) => {
  const pre4 = undefined
  const serverVersion = guessSemverVersion(getVersion(state))
  if (!semver.valid(serverVersion)) {
    return pre4
  }
  if (semver.gte(serverVersion, NEO4J_4_0)) {
    return { database }
  }
  return pre4
}
