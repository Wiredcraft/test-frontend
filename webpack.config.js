var webpack = require('webpack')

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
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js|jsx$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
};
