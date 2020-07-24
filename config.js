/**
 * webpack 自定义配置
 * 以便相关开发人员灵活配置
 * by xiaoT
 */

const path = require('path')
const mocker = require('mocker-api')

module.exports = {
  devServer: {
    before (app) {
      if (process.env.MOCK) {
        mocker(app, path.resolve('./__mocks__/server.js'))
      }
    },
    compress: true,
    port: '8888'
  },
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, './src/components'),
      '@CSS': path.resolve(__dirname, './src/common/css'),
      '@JS': path.resolve(__dirname, './src/common/js'),
      '@Routes': path.resolve(__dirname, './src/router'),
      '@Store': path.resolve(__dirname, './src/store'),
    },
    extensions: ['.ts', '.tsx', '.jsx', '.js']
  }
}
