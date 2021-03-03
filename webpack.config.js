const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;
  let envKeys = [];
  if (env) {
    envKeys = Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, []);
  }

  return {
    entry: ['babel-polyfill', './src/index.js'],
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env', '@babel/preset-react'] },
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
          use: ['file-loader'],
        },
      ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'public/'),
      port: 3000,
      publicPath: 'http://localhost:3000/dist/',
      // hotOnly: true,
      historyApiFallback: true,
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  };
};
