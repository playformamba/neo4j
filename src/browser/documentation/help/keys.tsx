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
import {
  FULLSCREEN_SHORTCUT,
  FOCUS_SHORTCUT,
  printShortcut,
  isMac
} from 'browser/modules/App/keyboardShortcuts'
const title = 'Keys'
const subtitle = 'Keyboard shortcuts'
const category = 'browserUiCommands'
const content = (
  <>
    <table className="table-condensed table-help table-help--keys">
      <thead>
        <tr>
          <th>Editor action</th>
          <th>Any mode</th>
          <th>Single-line mode</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Execute current command</td>
          <td>
            <div className="key code">
              {isMac ? '<Cmd-Return>' : '<Ctrl-Return>'}
            </div>
          </td>
          <td>
            <div className="key code">{'<Return>'}</div>
          </td>
        </tr>
        <tr>
          <td>Previous command in history</td>
          <td>
            <div className="key code">
              {isMac ? '<Cmd-Up-Arrow>' : '<Ctrl-Up-Arrow>'}
            </div>
          </td>
          <td>
            <div className="key code">{'<Up-Arrow>'}</div>
          </td>
        </tr>
        <tr>
          <td>Next command in history</td>
          <td>
            <div className="key code">
              {isMac ? '<Cmd-Down-Arrow>' : '<Ctrl-Down-Arrow>'}
            </div>
          </td>
          <td>
            <div className="key code">{'<Down-Arrow>'}</div>
          </td>
        </tr>
        <tr>
          <td>Switch to multi-line editing</td>
          <td />
          <td>
            <div className="key code">{'<Shift-Return>'}</div>
          </td>
        </tr>
        <tr>
          <td />
        </tr>
        <tr>
          <th>Global actions</th>
          <th />
          <th />
        </tr>
        <tr>
          <td>Change focus to editor</td>
          <td>
            <div className="key code">{printShortcut(FOCUS_SHORTCUT)}</div>
          </td>
        </tr>
        <tr>
          <td>Toggle fullscreen editor</td>
          <td>
            <div className="key code">{printShortcut(FULLSCREEN_SHORTCUT)}</div>
          </td>
        </tr>
        <tr>
          <td />
        </tr>
      </tbody>
    </table>
    <div>
      <h3>Next steps </h3>
      <ul>
        <li>
          <a help-topic="commands">Help commands</a> - Useful neo4j Browser
          commands
        </li>
        <li>
          <a play-topic="cypher">Play Cypher</a> - Learn Cypher basics
        </li>
      </ul>
    </div>
  </>
)

export default { title, subtitle, category, content }
