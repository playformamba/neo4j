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

const helpers = require('./webpack-helpers')
const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const manifestGeneration = require('./generate-manifest-helpers')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = () => {
  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(helpers.nodeEnv)
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          // Copy manifest-base file and pick wanted data from package.json
          // and merge them into the manifest.json output file
          from: path.resolve(helpers.browserPath, 'manifest-base.json'),
          to: path.resolve(helpers.buildPath, 'manifest.json'),
          transform: content => {
            const packageJsonData = manifestGeneration.loadDataFromFile(
              path.join(helpers.projectPath, 'package.json')
            )
            const wantedData = manifestGeneration.buildTargetObject(
              packageJsonData,
              'propertiesToCopyToManifest'
            )
            const mergedData = manifestGeneration.mergeObjects(
              wantedData,
              JSON.parse(content)
            )
            return JSON.stringify(mergedData, null, 2)
          }
        },
        {
          from: path.resolve(helpers.browserPath, 'images'),
          to: helpers.assetsPath + '/images'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(helpers.browserPath, 'index.html'),
      path: helpers.buildPath,
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: './../bundle-report.html'
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    }),
    new ForkTsCheckerNotifierWebpackPlugin({
      title: 'TypeScript',
      excludeWarnings: false
    }),
    new MonacoWebpackPlugin({
      features: [
        '!accessibilityHelp',
        '!anchorSelect',
        '!caretOperations',
        '!clipboard',
        '!codeAction',
        '!codelens',
        '!colorDetector',
        '!contextmenu',
        '!coreCommands',
        '!cursorUndo',
        '!dnd',
        '!fontZoom',
        '!gotoError',
        '!gotoLine',
        '!gotoSymbol',
        '!iPadShowKeyboard',
        '!inspectTokens',
        '!links',
        '!parameterHints',
        '!quickHelp',
        '!referenceSearch',
        '!snippets',
        '!toggleHighContrast',
        '!toggleTabFocusMode',
        '!transpose',
        '!unusualLineTerminators',
        '!viewportSemanticTokens'
      ],
      languages: []
    })
  ]

  if (!helpers.isProduction) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  }
  if (helpers.isProduction) {
    plugins.unshift(new CleanWebpackPlugin())
  }
  return plugins
}
