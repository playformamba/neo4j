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
import uuid, { v4 } from 'uuid'

import { CYPHER_REQUEST } from 'shared/modules/cypher/cypherDuck'
import { withBus } from 'react-suber'

import {
  deleteUser,
  addRoleToUser,
  removeRoleFromUser,
  activateUser,
  suspendUser
} from 'shared/modules/cypher/boltUserHelper'

import { FormButton } from 'browser-components/buttons'
import { CloseIcon } from 'browser-components/icons/Icons'
import { StyledBodyTr } from 'browser-components/DataTables'
import {
  StyledUserTd,
  StyledButtonContainer,
  StyleRolesContainer
} from './styled'

import RolesSelector from './RolesSelector'
import { neo4j_BROWSER_USER_ACTION_QUERY } from 'services/bolt/txMetadata'
import { driverDatabaseSelection } from 'shared/modules/features/versionedFeatures'
import { connect } from 'react-redux'

type UserInformationState = any

export class UserInformation extends Component<any, UserInformationState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      edit: false,
      availableRoles: this.props.availableRoles || [],
      roles: this.props.user.roles || [],
      username: this.props.user.username
    }
  }

  removeClick() {
    this.props.bus.self(
      CYPHER_REQUEST,
      {
        query: deleteUser(this.state.username, Boolean(this.props.useSystemDb)),
        params: {
          username: this.state.username
        },
        queryType: neo4j_BROWSER_USER_ACTION_QUERY,
        useDb: this.props.useSystemDb
      },
      this.handleResponse.bind(this)
    )
  }

  suspendUser() {
    this.props.bus.self(
      CYPHER_REQUEST,
      {
        query: suspendUser(
          this.state.username,
          Boolean(this.props.useSystemDb)
        ),
        params: {
          username: this.state.username
        },
        queryType: neo4j_BROWSER_USER_ACTION_QUERY,
        useDb: this.props.useSystemDb
      },
      this.handleResponse.bind(this)
    )
  }

  activateUser() {
    this.props.bus.self(
      CYPHER_REQUEST,
      {
        query: activateUser(
          this.state.username,
          Boolean(this.props.useSystemDb)
        ),
        params: {
          username: this.state.username
        },
        queryType: neo4j_BROWSER_USER_ACTION_QUERY,
        useDb: this.props.useSystemDb
      },
      this.handleResponse.bind(this)
    )
  }

  status = () => (!this.props.user.active ? 'Suspended' : 'Active')
  statusButton() {
    return !this.props.user.active ? (
      <FormButton label="Activate" onClick={this.activateUser.bind(this)} />
    ) : (
      <FormButton label="Suspend" onClick={this.suspendUser.bind(this)} />
    )
  }

  passwordChange = () =>
    this.props.user.passwordChangeRequired ? 'Required' : '-'

  listRoles() {
    return (
      !!this.state.roles.length && (
        <StyleRolesContainer>
          {this.state.roles.map((role: any) => {
            return (
              <FormButton
                key={v4()}
                label={role}
                icon={<CloseIcon />}
                buttonType="tag"
                onClick={() => {
                  this.props.bus.self(
                    CYPHER_REQUEST,
                    {
                      query: removeRoleFromUser(
                        role,
                        this.state.username,
                        Boolean(this.props.useSystemDb)
                      ),
                      params: {
                        username: this.state.username,
                        role
                      },
                      queryType: neo4j_BROWSER_USER_ACTION_QUERY,
                      useDb: this.props.useSystemDb
                    },
                    this.handleResponse.bind(this)
                  )
                }}
              />
            )
          })}
        </StyleRolesContainer>
      )
    )
  }

  onRoleSelect(event: any) {
    this.props.bus.self(
      CYPHER_REQUEST,
      {
        query: addRoleToUser(
          this.state.username,
          event.target.value,
          Boolean(this.props.useSystemDb)
        ),
        params: {
          username: this.state.username,
          role: event.target.value
        },
        queryType: neo4j_BROWSER_USER_ACTION_QUERY,
        useDb: this.props.useSystemDb
      },
      this.handleResponse.bind(this)
    )
  }

  handleResponse(response: any) {
    if (!response.success) return this.setState({ errors: [response.error] })
    return this.props.refresh()
  }

  availableRoles() {
    return this.state.availableRoles.filter(
      (role: any) => this.props.user.roles.indexOf(role) < 0
    )
  }

  render() {
    return (
      <StyledBodyTr className="user-info">
        <StyledUserTd className="username" aria-labelledby="username">
          <StyledButtonContainer>
            {this.props.user.username}
          </StyledButtonContainer>
        </StyledUserTd>
        <StyledUserTd className="roles" aria-labelledby="roles">
          <RolesSelector
            // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
            id={`roles-selector-${uuid()}`}
            roles={this.availableRoles()}
            onChange={this.onRoleSelect.bind(this)}
          />
        </StyledUserTd>
        <StyledUserTd className="current-roles" aria-labelledby="current-roles">
          <span>{this.listRoles()}</span>
        </StyledUserTd>
        <StyledUserTd className="status" aria-labelledby="status">
          <StyledButtonContainer
            className={`status-indicator status-${this.status().toLowerCase()}`}
          >
            {this.status()}
          </StyledButtonContainer>
        </StyledUserTd>
        <StyledUserTd className="status-action" aria-labelledby="status-action">
          {this.statusButton()}
        </StyledUserTd>
        <StyledUserTd
          className="password-change"
          aria-labelledby="password-change"
        >
          <StyledButtonContainer>{this.passwordChange()}</StyledButtonContainer>
        </StyledUserTd>
        <StyledUserTd className="delete" aria-labelledby="delete">
          <FormButton
            className="delete"
            label="Remove"
            buttonType="destructive"
            onClick={this.removeClick.bind(this)}
          />
        </StyledUserTd>
      </StyledBodyTr>
    )
  }
}
const mapStateToProps = (state: any) => {
  const { database } = driverDatabaseSelection(state, 'system') || {}

  return {
    useSystemDb: database
  }
}

export default withBus(connect(mapStateToProps, null)(UserInformation))
