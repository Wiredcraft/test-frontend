const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: ['./src/index.jsx'],
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['react-hot-loader', 'babel-loader']
            }, {
                test: /\.css/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'css-hot-loader'
                    }, {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('postcss-import')({addDepencenyTo: webpack}),
                                require('postcss-url')(),
                                require('postcss-nested')(),
                                require('postcss-cssnext')()
                            ]
                        }
                    }
                ]
            }, {
                test: /\.svg/,
                use: ['svg-url-loader']
            }, {
                test: /\.(jpe?g|png|gif)/,
                use: ['file-loader', 'image-webpack-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: './public/index.html'})],
    devServer: {
        contentBase: './dist',
        publicPath: '/',
        host: '0.0.0.0',
        port: 4000,
        historyApiFallback: true
    }
}
