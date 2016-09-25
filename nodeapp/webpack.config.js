const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./config/parts.js');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: [
    path.join(__dirname, 'node_modules', 'normalize.css')
  ],
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    style: PATHS.style,
    app: ['webpack-hot-middleware/client', PATHS.app],
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      template: 'index.tmp.html'
    })
  ]
};

let config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build':
  case 'stats':
    common.entry['app'] = [PATHS.app]

    config = merge(
      common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.setupJSON(),
      parts.setupJSX(PATHS.app),
      parts.setupFonts(),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
      parts.minify(),
      parts.extractCSS(PATHS.style)
      //parts.purifyCSS()
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'development'
      ),
      parts.hotModuleReplacement(),
      parts.setupJSON(),
      parts.setupJSX(PATHS.app),
      parts.setupFonts(),
      parts.setupCSS(PATHS.style),
      parts.purifyCSS()
    );
}

module.exports = validate(config, {
  quiet: true
});
