const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const isProd = (process.env.ENV_MODE === 'production')

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:9000',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/docs/'
    },
    devServer: {
        contentBase: path.join(__dirname, "/"),
        compress: true,
        port: 9000,
        hot: true,
        inline: true
    },
    plugins: getPlugins(),
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['react-hot-loader', 'babel-loader?presets[]=env,plugins[]=transform-runtime'],
        }],
    }
}

function getPlugins() {
    const plugins = []
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                ENV_MODE: JSON.stringify(process.env.ENV_MODE),
            },
        }))

    if (isProd) {
        plugins.push(
            new webpack.optimize.UglifyJsPlugin(), // minify everything
            new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
            new CompressionPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8,
            })
        )
    }

    return plugins
}
