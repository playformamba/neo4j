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

import { version } from 'project-root/package.json'

// Application info
export const neo4j_BROWSER_BACKGROUND_QUERY = 'system'
export const neo4j_BROWSER_USER_QUERY = 'user-direct'
export const neo4j_BROWSER_USER_ACTION_QUERY = 'user-action'
export const neo4j_BROWSER_USER_TRANSPILED_QUERY = 'user-transpiled'
export const neo4j_BROWSER_APP_ID = `neo4j-browser_v${version}`

export const getBackgroundTxMetadata = ({ hasServerSupport = false }) => {
  if (!hasServerSupport) {
    return {}
  }
  return {
    txMetadata: {
      type: neo4j_BROWSER_BACKGROUND_QUERY,
      app: neo4j_BROWSER_APP_ID
    }
  }
}

export const getUserTxMetadata = (type: any) => ({
  hasServerSupport = false
}) => {
  if (!hasServerSupport || !type) {
    return {}
  }
  return {
    txMetadata: {
      type,
      app: neo4j_BROWSER_APP_ID
    }
  }
}

export const getUserDirectTxMetadata = getUserTxMetadata(
  neo4j_BROWSER_USER_QUERY
)
export const getUserActionTxMetadata = getUserTxMetadata(
  neo4j_BROWSER_USER_ACTION_QUERY
)
export const getUserTranspiledTxMetadata = getUserTxMetadata(
  neo4j_BROWSER_USER_TRANSPILED_QUERY
)
