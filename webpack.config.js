var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname +  '/public',
        publicPath: '/public/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.css|scss$/,
                loaders: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.js|jsx$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.(woff|eot|ttf|png|svg)$/, // Have to configure fonts loaders for the generated fonts
                loader: 'url-loader'
            }
        ]
    }
};
