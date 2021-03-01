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

import React, { Component } from 'react'

import FrameTemplate from '../../Frame/FrameTemplate'
import ConnectionForm from './ConnectionForm'
import FrameError from '../../Frame/FrameError'
import { H3 } from 'browser-components/headers'
import { Lead } from 'browser-components/Text'

import Render from 'browser-components/Render'
import { StyledConnectionAside, StyledConnectionBodyContainer } from './styled'
import { connect } from 'react-redux'
import { getAllowedAuthSchemes } from 'shared/modules/app/appDuck'
import { NO_AUTH } from 'services/bolt/boltHelpers'

type State = any

export class ConnectionFrame extends Component<any, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      error: {}
    }
  }

  error(e: any) {
    this.setState({ error: e })
  }

  success() {
    this.setState({ success: true })
  }

  render() {
    return (
      <FrameTemplate
        header={this.props.frame}
        statusbar={
          <FrameError
            code={this.state.error.code}
            message={this.state.error.message}
          />
        }
        contents={
          <>
            <StyledConnectionAside>
              {this.state.success ? (
                <>
                  <H3>连接到neo4j</H3>
                  <Lead>很高兴见到你</Lead>
                </>
              ) : (
                <>
                  <H3>连接到neo4j</H3>
                  {/*<Lead>*/}
                  {/*  Database access*/}
                  {/*  {this.props.mightRequireAuth*/}
                  {/*    ? ' might require '*/}
                  {/*    : ' requires '}*/}
                  {/*  an authenticated connection*/}
                  {/*</Lead>*/}
                </>
              )}
            </StyledConnectionAside>
            <StyledConnectionBodyContainer>
              <ConnectionForm
                {...this.props}
                onSuccess={this.success.bind(this)}
                error={this.error.bind(this)}
              />
            </StyledConnectionBodyContainer>
          </>
        }
      />
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    mightRequireAuth: getAllowedAuthSchemes(state).includes(NO_AUTH)
  }
}

export default connect(mapStateToProps)(ConnectionFrame)
