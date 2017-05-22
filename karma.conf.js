var webpack = require('webpack'),
    path = require('path');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './test/*.js'
        ],

        preprocessors: {
            './test/*.js': ['webpack']
        },

        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /(node_modules|bower_components)/,
                        loaders: ['react-hot-loader', 'babel-loader?presets[]=env,plugins[]=transform-runtime'],
                    },
                    {
                        test: /\.(css|scss|sass)$/,
                        use: [{
                            loader: "style-loader" // creates style nodes from JS strings
                        }, {
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: "sass-loader" // compiles Sass to CSS
                        }]
                    },
                    {
                        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        loader: "url-loader?limit=10000&mimetype=application/font-woff"
                    },
                    {
                        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        loader: "file-loader"
                    }
                ]
            },
            externals: {
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-chrome-launcher'
        ],


        babelPreprocessor: {
            options: {
                presets: ['airbnb']
            }
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
    })
};
