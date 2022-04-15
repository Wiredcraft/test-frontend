const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: path.resolve(__dirname, 'app', 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    },
    mode: "development",
    resolve: {
        alias: {
            "app": path.resolve(__dirname, 'app'),
        },
        extensions: ['.js', '.ts', '.tsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8888,
        proxy: {
            "/api": "http://localhost:8100"
        }
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    }
                ]
            },
            {
                test: /\.svg$/,
                issuer: /\.[jt]sx?$/,
                use: [{
                    loader: '@svgr/webpack',
                    options: {
                        typescript: true,
                        ext: "tsx",
                    }
                }],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ]
};