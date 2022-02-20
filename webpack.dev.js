const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'development',
  devServer: {
    // host: '0.0.0.0',
    port: 8008,
    hot: true,
    open: true,
    contentBase: ['./public'],
    compress: true,
    proxy: {
      '/api': 'http://localhost:8009',
      pathRewrite: { '/api': '' },
    },
  },
};
