const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        pathinfo: true,
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.module\.s[ac]ss$/i,
                use: [
                    // { loader: 'style-loader' },
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'sass-loader', options: { implementation: require('dart-sass') } }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /\.module\.s[ac]ss$/i,
                use: [
                    // { loader: 'style-loader' },
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader', options: { implementation: require('dart-sass') } }
                ]
            },
            {
                test: /\.json$/i,
                use: [{ loader: 'json-loader' }]
            },
            {
                test: /\.(js|jsx)$/i,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
}
