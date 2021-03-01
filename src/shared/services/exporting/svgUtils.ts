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
import d3 from 'd3'
export const prepareForExport = (
  svgElement: any,
  graphElement: any,
  type: any
) => {
  const dimensions = getSvgDimensions(graphElement)
  let svg = d3.select(
    document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  )

  svg.append('title').text('Neo4j Graph Visualization')
  svg.append('desc').text('Created using Neo4j (http://www.neo4j.com/)')

  switch (type) {
    case 'plan': {
      svg = appendPlanLayers(svgElement, svg)
      break
    }
    case 'graph':
    default:
      svg = appendGraphLayers(svgElement, svg)
  }

  svg.selectAll('.overlay, .ring').remove()
  svg.selectAll('.context-menu-item').remove()
  svg.selectAll('text').attr('font-family', 'sans-serif')

  svg.attr('width', dimensions.width)
  svg.attr('height', dimensions.height)
  svg.attr('viewBox', dimensions.viewBox)

  return svg
}

const getSvgDimensions = (view: any) => {
  const boundingBox = view.boundingBox()
  const dimensions = {
    width: boundingBox.width,
    height: boundingBox.height,
    viewBox: [
      boundingBox.x,
      boundingBox.y,
      boundingBox.width,
      boundingBox.height
    ].join(' ')
  }
  return dimensions
}

const appendGraphLayers = (svgElement: any, svg: any) => {
  window.d3
    .select(svgElement)
    .selectAll('g.layer')
    .each(function() {
      svg.node().appendChild(
        window.d3
          // @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
          .select(this)
          .node()
          .cloneNode(true)
      )
    })
  return svg
}
const appendPlanLayers = (svgElement: any, svg: any) => {
  window.d3
    .select(svgElement)
    .selectAll('g.layer')
    .each(function() {
      svg.node().appendChild(
        window.d3
          // @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
          .select(this)
          .node()
          .cloneNode(true)
      )
    })
  return svg
}
