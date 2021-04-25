const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 8008,
    hot: true,
    open: true,
    contentBase: './dist',
    proxy: {
      '/api': 'http://localhost:8008',
      'pathRewrite': { '/api': '' },
    },
  },
};
