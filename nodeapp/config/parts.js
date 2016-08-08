const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

exports.setupJSON = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.json?$/,
          loader: 'json'
        } 
      ]
    }
  };
}

exports.setupJSX = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: '/node_modules/',
          loaders: ['react-hot', 'babel?cacheDirectory,presets[]=react,presets[]=es2015,presets[]=stage-1,plugins[]=transform-decorators-legacy'],
          include: paths
        }, 
      ]
    }
  };
}

exports.setupFonts = function() {
  return {
    module: {
      loaders: [
        {
          test: /\.woff$/,
          // Inline small woff files and output them below font/.
          // Set mimetype just in case.
          loader: 'url',
          query: {
            name: 'font/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff'
          }
        },
        {
          test: /\.ttf$|\.eot$/,
          loader: 'file',
          query: {
            name: 'font/[hash].[ext]'
          }
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url',
          query: {
            limit: 50000,
            mimetype: 'application/font-woff',
            name: './fonts/[hash].[ext]'
          }
        },
        {
          test: /\.svg$/,
          loader: 'file'
        }
      ]
    }
  };
}

exports.setupCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          //loaders: ['style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader', 'postcss-loader'],
          loaders: ['style', 'css', 'postcss-loader']
          //include: paths
        }
      ]
    },
    postcss: function () {
      return [autoprefixer, precss];
    }
  };
}

exports.hotModuleReplacement = function() {
  return {
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
}

exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
          warnings: false
        }
      })
    ]
  };
}

exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
}

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
}

exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
      })
    ]
  };
}

exports.extractCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
          //include: paths
        }
      ]
    },
    postcss: function () {
      return [autoprefixer, precss];
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('[name].[chunkhash].css', {
        allChunks: true
      })
    ]
  };
}

exports.purifyCSS = function() {
  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: __dirname,
        purifyOptions: {
          minify: true,
          info: true
        }
      })
    ]
  }
}

exports.devServer = function(options) {
  return {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: options.host, // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
}
