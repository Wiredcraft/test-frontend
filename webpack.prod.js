const config = require('./webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  ...config,
  mode: 'production',
  optimization: {
    minimize: true,
  },
  plugins: [...config.plugins, new BundleAnalyzerPlugin()],
};
