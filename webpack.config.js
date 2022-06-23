const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.tsx',
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      react: path.resolve('node_modules', 'react'),
      'react-dom': path.resolve('node_modules', 'react-dom'),
      store: path.resolve(__dirname, 'client/store'),
      utils: path.resolve(__dirname, 'client/utils'),
    },
  },
  module: {
    rules: [{
      test: /(\.css|\.less)$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'less-loader'}
      ]
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.png$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
    })
  ]
}
