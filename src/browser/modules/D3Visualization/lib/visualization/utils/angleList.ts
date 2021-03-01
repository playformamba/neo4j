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

export default class AngleList {
  list: any
  constructor(list: any) {
    this.list = list
  }

  getAngle(index: any) {
    return this.list[index].angle
  }

  fixed(index: any) {
    return this.list[index].fixed
  }

  totalLength() {
    return this.list.length
  }

  length(run: any) {
    if (run.start < run.end) {
      return run.end - run.start
    } else {
      return run.end + this.list.length - run.start
    }
  }

  angle(run: any) {
    if (run.start < run.end) {
      return this.list[run.end].angle - this.list[run.start].angle
    } else {
      return 360 - (this.list[run.start].angle - this.list[run.end].angle)
    }
  }

  wrapIndex(index: any) {
    if (index === -1) {
      return this.list.length - 1
    } else if (index >= this.list.length) {
      return index - this.list.length
    } else {
      return index
    }
  }
}
