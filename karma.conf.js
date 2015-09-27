var webpack = require("webpack"),
	     path = require("path");

module.exports = function(config) {
 config.set({
   basePath: "",
   frameworks: ["jasmine"],
   files: [
		"./test/_test.js"
   ],
   preprocessors: {
		"./test/_test.js": ["webpack"]
   },
	webpack: {
		module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'react-hot!babel'
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        },
        {
          test: /\.scss$/,
          loader: "style!css!sass"
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/octet-stream"
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file"
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml"
        }
      ]
		}
	},
	webpackMiddleware: {
		noInfo: true
	},
	plugins: [
		require("karma-webpack"),
		require("karma-jasmine"),
		require("karma-chrome-launcher")
	],
   reporters: ["dots"],
   port: 9876,
   colors: true,
   logLevel: config.LOG_INFO,
   autoWatch: true,
   browsers: ["Chrome"],
   singleRun: false
 });
};
