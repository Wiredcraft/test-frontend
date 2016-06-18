const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');


const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
}


module.exports = {
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "http://localhost/",
        port: 8182
    },

    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8182',
        PATHS.src
    ],

    output: {
        path: PATHS.dist,
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "dist/",
        publicPath: "/",

        historyApiFallback: true
    },


    module: {

        preLoaders: [
            {
                test: /(\.js$|\.jsx$)/,
                include: PATHS.src,
                loader: "eslint"
            }
        ],

        loaders: [
            {
                test: /\.scss$/,
                include: PATHS.src,
                loaders: [
                    'style',
                    'css',
                    'sass',
                    'postcss'
                ]
            },
            {
                test: /\.jsx?$/,
                include: PATHS.src,
                loader: 'babel',
                query: {
                    plugins: ['transform-object-rest-spread'],
                    presets: ['react', 'es2015']
                }
            },

            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    postcss: function(webpack) {
        return [autoprefixer, precss, postcssImport({ addDependencyTo: webpack }), postcssUrl({})];
    },
    eslint: {
        configFile: '.eslintrc'
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8182' }),
        new HtmlWebpackPlugin({
            favicon: 'src/assets/favicon.ico',
            template: 'src/index.html',
            inject: true
        })
    ]
}