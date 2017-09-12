const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

commonConfig = {
  entry: {
    app: [
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: "/"
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader?modules&minimize','postcss-loader']
      })
    }, {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use:['css-loader?sourceMap','postcss-loader','sass-loader']
      })
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: ['url-loader?limit=8192&name=images/[name].[hash:8].[ext]']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.tpl.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[hash:8].js'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'runtime'
    // }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:5].css',
      allChunks: true,
      disable: process.env.NODE_ENV != 'production'
    })
  ]
};
module.exports = commonConfig;
