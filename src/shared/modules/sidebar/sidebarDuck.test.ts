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

import reducer, { SidebarState, toggle, setDraftScript } from './sidebarDuck'

describe('sidebarDuck', () => {
  test('should open a drawer when closed', () => {
    const action = toggle('db')

    const nextState = reducer(undefined, action)
    expect(nextState).toEqual({ drawer: 'db', draftScript: null })
  })

  test('should switch drawer when a different one already is open', () => {
    const initialState: SidebarState = {
      drawer: 'favorites',
      draftScript: null
    }
    const action = toggle('db')
    const nextState = reducer(initialState, action)
    expect(nextState.drawer).toEqual('db')
  })

  test('should close drawer when the opened one is toggled', () => {
    const initialState: SidebarState = {
      drawer: 'db',
      draftScript: null
    }
    const action = toggle('db')
    const nextState = reducer(initialState, action)
    expect(nextState.drawer).toEqual(null)
  })

  test('should support setting a draft script', () => {
    const action = setDraftScript('test', 'favorites')
    const nextState = reducer(undefined, action)
    expect(nextState.draftScript).toEqual('test')
  })

  test('clears draft script when toggled', () => {
    const action = setDraftScript('test', 'favorites')
    const nextState = reducer(undefined, action)
    expect(nextState.draftScript).toEqual('test')

    const toggleAction = toggle('favorites')
    const lastState = reducer(nextState, toggleAction)
    expect(lastState.draftScript).toEqual(null)
  })
})
