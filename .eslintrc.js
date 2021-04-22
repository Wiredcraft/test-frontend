/* .eslintrc.js */
module.exports = {
    globals: {
        React: true,
        _: true
    },
    rules: {
        'react/prop-types': 'never',
        'eol-last': ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'max-len': ['warn', 160],
        'no-sequences': 'warn',
        'react/jsx-no-undef': 'warn',
        'object-curly-newline': ['off'],
        'func-names': ['off'],
        'global-require': ['warn'],
        'jsx-a11y/no-noninteractive-element-interactions': ['warn']
    }
}
