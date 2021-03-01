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
import React from 'react'
import { connect } from 'react-redux'
import semver from 'semver'
import { getVersion } from 'shared/modules/dbMeta/dbMetaDuck'
import DocumentItems from './DocumentItems'
import { Drawer, DrawerBody, DrawerHeader } from 'browser-components/drawer'
import styled from 'styled-components'
const FullSizeDrawerBody = styled(DrawerBody)`
  padding: 0;
`

export const formatDocVersion = (v = ''): string => {
  if (!semver.valid(v)) {
    // All non-strings return
    return 'current'
  }
  if (semver.prerelease(v)) {
    return `${semver.major(v)}.${semver.minor(v)}-preview`
  }
  return `${semver.major(v)}.${semver.minor(v)}` || 'current'
}
export const shouldLinkToNewRefs = (v: string): boolean => {
  if (!semver.valid(v)) return false
  return semver.gte(v, '3.5.0-alpha01')
}

const getReferences = (version: string, v: string) => {
  const newRefs = [
    {
      name: 'Getting Started with Neo4j',
      url: `https://neo4j.com/docs/getting-started/${v}`
    },
    {
      name: 'Cypher Introduction',
      url: ` https://neo4j.com/docs/cypher-manual/${v}/introduction/ `
    }
  ]
  const oldRefs = [
    {
      name: 'Getting Started',
      url: `https://neo4j.com/docs/developer-manual/${v}/get-started/`
    },
    {
      name: 'Developer Manual',
      url: `https://neo4j.com/docs/developer-manual/${v}/`
    },
    {
      name: 'Cypher Introduction',
      url: `https://neo4j.com/docs/developer-manual/${v}/cypher/`
    }
  ]
  const common = [
    {
      name: 'Cypher Refcard',
      url: `https://neo4j.com/docs/cypher-refcard/${v}/`
    },
    {
      name: 'Drivers Manual',
      url: `https://neo4j.com/docs/driver-manual/current/`
    }
  ]

  const docs = [
    ...(shouldLinkToNewRefs(version) ? newRefs : oldRefs),
    ...common
  ]
  const other = [
    {
      name: 'Operations Manual',
      url: `https://neo4j.com/docs/operations-manual/${v}/`
    },
    {
      name: 'Developer Site',
      url: 'https://www.neo4j.com/developer/'
    },
    {
      name: 'Knowledge Base',
      url: 'https://neo4j.com/developer/kb/'
    },
    {
      name: 'neo4j Browser Developer Pages',
      url: 'https://neo4j.com/developer/neo4j-browser/'
    }
  ]
  return { docs, other }
}

type DocumentsProps = { version: string; urlVersion: string }
const Documents = ({ version, urlVersion }: DocumentsProps) => {
  const useful = [
    { name: '帮助', command: ':help' },
    { name: '关于Cypher命令', command: ':help cypher' },
    { name: '可用命令列表', command: ':help commands' },
    // { name: 'Keybindings', command: ':help keys' },
    { name: '命令历史', command: ':history' },
    { name: '显示数据库架构', command: 'CALL db.schema.visualization()' },
    { name: '系统信息', command: ':sysinfo' }
  ]

  const guides = [
    { name: '关于neo4j', command: ':play intro' },
    { name: '关于Cypher', command: ':play cypher' },
    { name: 'Cypher样例 - 使用样例数据库', command: ':play movies' },
    // {
    //   name: 'More guides',
    //   url: 'https://neo4j.com/graphgists/'
    // }
  ]

  const { docs, other } = getReferences(version, urlVersion)
  return (
    <Drawer id="db-documents">
      <DrawerHeader>帮助与学习</DrawerHeader>
      <FullSizeDrawerBody>
        <DocumentItems header="常用命令" items={useful} />
        <DocumentItems header="帮助" items={guides} />
        {/*<DocumentItems header="Documentation links" items={docs} />*/}
        {/*<DocumentItems header="Other Resources" items={other} />*/}
      </FullSizeDrawerBody>
    </Drawer>
  )
}

const mapStateToProps = (state: any) => {
  const version = getVersion(state)
  return {
    version,
    urlVersion: formatDocVersion(version)
  }
}

export default connect(mapStateToProps)(Documents)
