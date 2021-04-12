import path from 'path';
import html from 'html-webpack-plugin';

module.exports = (env) => {
  return {
    mode: env.prod ? 'production' : 'development',
    entry: {
      main: path.resolve(__dirname, '../src/index.tsx'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    plugins: [
      new html({
        template: path.resolve(__dirname, './index.html')
      }),
    ],
  };
};