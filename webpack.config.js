const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HappyPack = require('happypack')
const threadPool = HappyPack.ThreadPool({ size: 5 })

const isDev = process.env.NODE_ENV !== 'production' // IMPROVE use webpack mode instead of NODE_ENV

const rule = {
    js: {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/
    },
    style_css: {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
    },
    style_less: {
        test: /\.less$/,
        loaders: [ 'style-loader', 'css-loader', 'less-loader' ]
    },
    style_stylus: {
        test: /\.styl$/,
        loaders: [ 'style-loader', 'css-loader?modules=true&localIdentName=[path][name]__[local]--[hash:base64:4]', 'stylus-loader' ],
        exclude: { or: [ /node_modules/, /global/ ] }
    },
    style_stylus_global: {
        test: /\.styl$/,
        loaders: [ 'style-loader', 'css-loader', 'stylus-loader' ],
        include: [ path.join(__dirname, './src/styles/global') ]
    }
}

const happyPlugins = isDev
    ? Object
        .entries(rule)
        .map(([ id, { loaders } ]) => {
            return new HappyPack({
                id,
                threadPool,
                loaders
            })
        })
    : []

const rules = isDev
    ? Object
        .entries(rule)
        .map(([ id, { loaders, ...cfg } ]) => {
            return {
                ...cfg,
                use: `happypack/loader?id=${id}`
            }
        })
    : Object
        .entries(rule)
        .map(([ id, { loaders, ...cfg } ]) => {
            const use = id.startsWith('style')
                ? ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: loaders.slice(1)
                })
                : loaders
            return {
                ...cfg,
                use
            }
        })

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',

    output: {
        filename: 'cms.[hash:8].js',
        // path: path.resolve(__dirname, 'dist'),
        path: path.join(__dirname, './dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            ...rules,
            {
                test: /\.yml/,
                use: ['json-loader', 'yaml-loader']
            },
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
                use: [ 'url-loader' ]
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            _: 'lodash'
        }),

        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        }),

        new ExtractTextPlugin('cms.[hash:8].css'),

        ...happyPlugins
    ],

    stats: {
        children: false
    },

    resolve: {
        enforceExtension: false,
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, './src'),
            path.join(__dirname, './node_modules')
        ],
        alias: {
            common: path.join('common'),
            constant: path.join('constants'),
            container: path.join('containers'),
            component: path.join('components'),
            style: path.join('styles'),
            image: path.join('images')
        }
    }
}

if (isDev) {
    config.devtool = 'cheap-module-source-map'

    config.plugins.push(
        new CopyWebpackPlugin([{ from: 'mock', to: 'mock' }])
    )

    config.devServer = {
        proxy: {
            '/~': {
                target: 'http://localhost:8080',
                router: req => req.url.split('/')[1].replace('~', 'http://'),
                pathRewrite: path => path.replace(/^\/~[^\/]+/, '')
            },
            '/mock': {
                target: 'http://localhost:8080',
                onProxyReq: req => {
                    req.method = 'GET'
                    req.setHeader('Access-Control-Allow-Origin', true)
                }
            }
        },

        // before: app => app.use()
    }
}

module.exports = config