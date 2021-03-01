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
import * as actions from 'shared/modules/settings/settingsDuck'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerSection,
  DrawerSectionBody,
  DrawerSubHeader
} from 'browser-components/drawer'
import { RadioSelector, CheckboxSelector } from 'browser-components/Form'
import {
  StyledSetting,
  StyledSettingLabel,
  StyledSettingTextInput
} from './styled'
import { toKeyString } from 'services/utils'
import {
  getExperimentalFeatures,
  experimentalFeatureSelfName,
  enableExperimentalFeature,
  disableExperimentalFeature
} from 'shared/modules/experimentalFeatures/experimentalFeaturesDuck'
import FeatureToggle from 'browser/modules/FeatureToggle/FeatureToggle'

const visualSettings = [
  {
    title: '用户界面',
    settings: [
      {
        theme: {
          tooltip:
            'Use "Auto" to have neo4j-browser detect system dark vs. light mode if available.',
          displayName: '主题',
          type: 'radio',
          options: [
            actions.AUTO_THEME,
            actions.LIGHT_THEME,
            actions.OUTLINE_THEME,
            actions.DARK_THEME
          ]
        }
      },
      // {
      //   codeFontLigatures: {
      //     displayName: 'Code font ligatures',
      //     tooltip: 'Use font ligatures for the command bar and cypher snippets',
      //     type: 'checkbox'
      //   }
      // },
      // {
      //   editorAutocomplete: {
      //     displayName: 'Enhanced query editor',
      //     tooltip: 'Autocomplete and syntax highlighting in query editor',
      //     type: 'checkbox'
      //   }
      // },
      // {
      //   enableMultiStatementMode: {
      //     displayName: 'Enable multi statement query editor',
      //     tooltip: 'Allows query editor to execute multiple statements',
      //     type: 'checkbox'
      //   }
      // }
    ]
  },
  {
    title: '偏好设置',
    settings: [
      {
        initCmd: {
          displayName: '初始命令',
          tooltip: 'This commands is executed once connected to a graph.',
          type: 'input'
        }
      },
      {
        connectionTimeout: {
          displayName: '连接时限：(ms)',
          tooltip:
            'The timeout in milliseconds when establishing a connection to neo4j.',
          type: 'input'
        }
      }
    ]
  },
  {
    title: '结果数量',
    settings: [
      {
        maxFrames: {
          displayName: '结果最大保存数量',
          tooltip:
            'Max number of result frames. When reached, old frames gets retired.'
        }
      },
      {
        maxHistory: {
          displayName: '查询历史最大数量',
          tooltip:
            'Max number of history entries. When reached, old entries gets retired.'
        }
      },
      {
        scrollToTop: {
          displayName: '滚动到顶端',
          tooltip: 'Automatically scroll stream to top on new frames.',
          type: 'checkbox'
        }
      }
    ]
  },
  {
    title: '图可视化',
    settings: [
      {
        initialNodeDisplay: {
          displayName: '初始显示节点数量',
          tooltip:
            'Limit number of nodes displayed on first load of the graph visualization.'
        }
      },
      {
        maxNeighbours: {
          displayName: '单个节点最大邻居显示数量',
          tooltip: 'Limit exploratory queries to this limit.'
        }
      },
      {
        maxRows: {
          displayName: '行数上限',
          tooltip: "Max number of rows to render in 'Rows' result view"
        }
      },
      {
        autoComplete: {
          displayName: '连接结果节点',
          tooltip:
            'If this is checked, after a cypher query result is retrieved, a second query is executed to fetch relationships between result nodes.',
          type: 'checkbox'
        }
      }
    ]
  }
]

export const Settings = ({
  settings,
  visualSettings,
  experimentalFeatures = {},
  onSettingsSave = () => {},
  onFeatureChange
}: any) => {
  if (!settings) return null
  const mappedSettings = visualSettings.map((visualSetting: any) => {
    const title = <DrawerSubHeader>{visualSetting.title}</DrawerSubHeader>
    const mapSettings = visualSetting.settings
      // @ts-expect-error ts-migrate(7030) FIXME: Not all code paths return a value.
      .map((settingObj: any) => {
        const setting = Object.keys(settingObj)[0]
        if (typeof settings[setting] === 'undefined') return null
        const visual = settingObj[setting].displayName
        const tooltip = settingObj[setting].tooltip || ''
        const type = settingObj[setting].type || 'input'

        if (type === 'input') {
          return (
            <StyledSetting key={toKeyString(visual)}>
              <StyledSettingLabel title={tooltip}>
                {visual}
                <StyledSettingTextInput
                  onChange={(event: any) => {
                    settings[setting] = event.target.value
                    onSettingsSave(settings)
                  }}
                  defaultValue={settings[setting]}
                  title={[tooltip]}
                  className={setting}
                />
              </StyledSettingLabel>
            </StyledSetting>
          )
        }

        if (type === 'radio') {
          return (
            <StyledSetting key={toKeyString(visual)}>
              <StyledSettingLabel title={tooltip}>{visual}</StyledSettingLabel>
              <RadioSelector
                options={settingObj[setting].options}
                onChange={(event: any) => {
                  settings[setting] = event.target.value
                  onSettingsSave(settings)
                }}
                selectedValue={settings[setting]}
              />
            </StyledSetting>
          )
        }

        if (type === 'checkbox') {
          return (
            <StyledSetting key={toKeyString(visual)}>
              <StyledSettingLabel title={tooltip}>
                <CheckboxSelector
                  onChange={(event: any) => {
                    settings[setting] = event.target.checked
                    onSettingsSave(settings)
                  }}
                  checked={settings[setting]}
                  data-testid={setting}
                />
                {visual}
              </StyledSettingLabel>
            </StyledSetting>
          )
        }
      })
      .filter((setting: any) => setting !== null)

    return (
      <React.Fragment key={toKeyString(visualSetting.title)}>
        {title}
        {mapSettings}
      </React.Fragment>
    )
  })

  const mappedExperimentalFeatures = Object.keys(experimentalFeatures)
    .map(key => {
      const feature = experimentalFeatures[key]
      // Don't show the toggle to disable this section
      if (feature.name === experimentalFeatureSelfName) {
        return null
      }
      const visual = feature.displayName
      const tooltip = feature.tooltip || ''
      return (
        <StyledSetting key={toKeyString(feature.name)}>
          <CheckboxSelector
            onChange={(event: any) => {
              const on = event.target.checked
              onFeatureChange(feature.name, on)
            }}
            checked={experimentalFeatures[feature.name].on}
          />
          <StyledSettingLabel title={tooltip}>{visual}</StyledSettingLabel>
        </StyledSetting>
      )
    })
    .filter(r => r)

  return (
    <Drawer id="db-settings">
      <DrawerHeader>浏览器设置</DrawerHeader>
      <DrawerBody>
        <DrawerSection>
          <DrawerSectionBody key="settings">{mappedSettings}</DrawerSectionBody>
          <FeatureToggle
            name={experimentalFeatureSelfName}
            on={
              <>
                {mappedExperimentalFeatures.length ? (
                  <DrawerSubHeader>Experimental features</DrawerSubHeader>
                ) : null}
                <DrawerSectionBody key="experimental-features">
                  {mappedExperimentalFeatures}
                </DrawerSectionBody>
              </>
            }
          />
        </DrawerSection>
      </DrawerBody>
    </Drawer>
  )
}

const mapStateToProps = (state: any) => {
  return {
    experimentalFeatures: getExperimentalFeatures(state),
    settings: state.settings,
    visualSettings
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSettingsSave: (settings: any) => {
      dispatch(actions.update(settings))
    },
    onFeatureChange: (name: any, on: any) => {
      if (on) {
        dispatch(enableExperimentalFeature(name))
      } else {
        dispatch(disableExperimentalFeature(name))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
