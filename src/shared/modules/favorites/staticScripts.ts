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

export const scripts = [
  {
    folder: 'basics',
    content: '// Connect to DBMS\n:server connect',
    versionRange: '0.0.0'
  },
  {
    folder: 'basics',
    content:
      '// Hello world\nCREATE (database:Database {name:"neo4j"})-[r:SAYS]->(message:Message {name:"Hello World!"}) RETURN database, message, r',
    versionRange: '>=3'
  },
  {
    folder: 'basics',
    content: '// 获取数据\nMATCH (n1)-[r]->(n2) RETURN r, n1, n2 LIMIT 25',
    versionRange: '>=3'
  },
  {
    folder: 'basics',
    not_executable: true,
    content:
      "// 生成索引\n// Replace:\n//   'LabelName' with label to index\n//   'propertyKey' with property to be indexed\nCREATE INDEX ON :<LabelName>(<propertyKey>)",
    versionRange: '>=3 <4'
  },
  {
    folder: 'basics',
    not_executable: true,
    content: `// Create an index
// Replace:
//   'IndexName' with name of index (optional)
//   'LabelName' with label to index
//   'propertyName' with property to be indexed
CREATE INDEX [IndexName] 
FOR (n:LabelName)
ON (n.propertyName)
`,
    versionRange: '>=4'
  },
  {
    folder: 'basics',
    not_executable: true,
    content:
      "// 生成独立的属性限制\n// Replace:\n//   'LabelName' with node label\n//   'propertyKey' with property that should be unique\nCREATE CONSTRAINT ON (n:<LabelName>) ASSERT n.<propertyKey> IS UNIQUE",
    versionRange: '>=3'
  },
  {
    folder: 'profile',
    content: '// -统计节点数量\nMATCH (n)\nRETURN count(n)',
    versionRange: '>=3'
  },
  {
    folder: 'profile',
    content: '// -统计边数量\nMATCH ()-->() RETURN count(*);',
    versionRange: '>=3'
  },
  // {
  //   folder: 'profile',
  //   content:
  //     '// What kind of nodes exist\n// Sample some nodes, reporting on property and relationship counts per node.\nMATCH (n) WHERE rand() <= 0.1\nRETURN\nDISTINCT labels(n),\ncount(*) AS SampleSize,\navg(size(keys(n))) as Avg_PropertyCount,\nmin(size(keys(n))) as Min_PropertyCount,\nmax(size(keys(n))) as Max_PropertyCount,\navg(size( (n)-[]-() ) ) as Avg_RelationshipCount,\nmin(size( (n)-[]-() ) ) as Min_RelationshipCount,\nmax(size( (n)-[]-() ) ) as Max_RelationshipCount',
  //   versionRange: '>=3'
  // },
  // {
  //   folder: 'profile',
  //   content: '// What is related, and how\nCALL db.schema.visualization()',
  //   versionRange: '>=4'
  // },
  // {
  //   folder: 'profile',
  //   content: '// What is related, and how\nCALL db.schema()',
  //   versionRange: '>=3 <4'
  // },
  {
    folder: 'profile',
    content: '// -显示节点标签\nCALL db.labels()',
    versionRange: '>=3'
  },
  {
    folder: 'profile',
    content: '// -显示边类型\nCALL db.relationshipTypes()',
    versionRange: '>=3'
  },
  {
    folder: 'profile',
    content: '// -显示索引与限制条件\n:schema',
    versionRange: '>=3'
  },
  {
    folder: 'graphs',
    content: '// 电影图\n:play movie-graph',
    versionRange: '>=3'
  },
  {
    folder: 'graphs',
    content: '// 罗斯文图\n:play northwind-graph',
    versionRange: '>=3'
  },
  {
    folder: 'procedures',
    content: '// -列出过程\nCALL dbms.procedures()',
    versionRange: '>=3'
  },
  {
    folder: 'procedures',
    content: '// -列出函数\nCALL dbms.functions()',
    versionRange: '>=3'
  },
  {
    folder: 'procedures',
    content: '// Show meta-graph\nCALL db.schema.visualization()',
    versionRange: '>=4'
  },
  {
    folder: 'procedures',
    content: '// 显示元图数据\nCALL db.schema()',
    versionRange: '>=3 <4'
  },
  {
    folder: 'procedures',
    content: '// -列出查询语句\nCALL dbms.listQueries()',
    versionRange: '>=3'
  },
  {
    folder: 'procedures',
    not_executable: true,
    content:
      '// 等待索引上线\n// E.g. db.awaitIndex(":Person(name)")\nCALL db.awaitIndex(<param>)',
    versionRange: '>=3'
  },
  {
    folder: 'procedures',
    not_executable: true,
    content:
      '// -对索引进行重新取样\n// E.g. db.resampleIndex(":Person(name)")\nCALL db.resampleIndex(<param>)',
    versionRange: '>=3'
  }
]

export const folders = [
  {
    id: 'basics',
    name: '-基础查询',
    isStatic: true,
    versionRange: ''
  },
  {
    id: 'graphs',
    name: '样例图',
    isStatic: true,
    versionRange: ''
  },
  {
    id: 'profile',
    name: '数据概况',
    isStatic: true,
    versionRange: ''
  },
  {
    id: 'procedures',
    name: '常用过程',
    isStatic: true,
    versionRange: ''
  }
]
