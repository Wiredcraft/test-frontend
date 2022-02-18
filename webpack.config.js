const path = require("path");

const config = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public")
    },
    // target: "web",
    devServer: {
      port: 8080,
      open: true,
      compress: true,
      disableHostCheck: true,
      contentBase: path.resolve(__dirname, 'public'),
    },
    resolve: {
      extensions: [".js",".jsx",".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}

module.exports = (env, argv) => {
  // console.log('argv.mode=',argv.mode)
  return config;
}