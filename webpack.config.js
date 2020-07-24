/**
 * react webpack config
 * by xiaoT
 */

let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')

const customConfig = require('./config')

const baseParams = {
  publicPath: '/',
  fileContext: 'static'
}

let config = {
  cache: true,
  entry: {
    // main: ['react', 'react-dom'],
    index: './src/index.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader', 'standard-loader']
      },
      {
        enforce: 'pre',
        test: /\.(jsx|js)$/,
        use: ['babel-loader', 'standard-loader']
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: { minimize: true }
        }
      }, {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }, {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: baseParams.fileContext + '/images/[name].[hash:8].[ext]'
            }
          }, {
            loader: 'image-webpack-loader',
            options: {
              quality: 80
            }
          }
        ]
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: baseParams.fileContext + '/fonts/[name].[hash:8].[ext]'
        }
      }, {
        test: /\.(mp4|mp3)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: baseParams.fileContext + '/medias/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['main', 'index']
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'main'
      // minChunks: 1,
    }
  }
}

Object.assign(config, customConfig)

module.exports = (env, argv) => {
  let { mode } = argv
  let outPath = 'dev'
  let filename = '[name]'
  let chunkFilename = 'chunk.[name]'

  if (mode === 'production') {
    outPath = 'build'
    filename = '[name].[contenthash:8]'
    chunkFilename = 'chunk.[name].[contenthash:8]'
  }

  config.output = {
    path: path.resolve(__dirname, outPath),
    publicPath: baseParams.publicPath,
    filename: baseParams.fileContext + '/js/' + filename + '.js',
    chunkFilename: baseParams.fileContext + '/js/' + chunkFilename + '.js'
  }
  // plugins config
  config.plugins.push(new CleanWebpackPlugin(outPath))
  config.plugins.push(new MiniCssExtractPlugin({
    filename: baseParams.fileContext + '/css/' + filename + '.css',
    chunkFilename: baseParams.fileContext + '/css/' + chunkFilename + '.css'
  }))

  return config
}
