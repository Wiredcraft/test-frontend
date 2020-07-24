/**
 * postcss config
 * by xiaoT
 */

let path = require('path')

module.exports = ({ file, options, env }) => {
  return {
    // map: true,
    // syntax: 'postcss-scss',
    plugins: {
      'postcss-import': {
        path: path.resolve(__dirname, './src/common/css')
      },
      'precss': {},
      'postcss-functions': {
        functions: {
          rem: function ($px) {
            return ($px / 10) + 'rem'
          }
        }
      },
      'postcss-preset-env': {
        browsers: 'last 2 versions',
        stage: 0
      },
      'cssnano': env === 'development' ? false : {},
      'postcss-css-variables': {
        'variables': {}
      }
    }
  }
}
