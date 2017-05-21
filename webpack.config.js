let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractPlugin = new ExtractTextPlugin({
	filename: 'index.css'
})
let webpack = require('webpack');

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["react","es2015"]
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: ['css-loader','sass-loader']
				})
			}
		]
	},
	plugins: [
		extractPlugin
	]
}