// NOTE: THIS IS A RANDOM CONFIGURATION.
module.exports = {
    root: true,
    noInlineConfig: true,
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
    },
    env: {
        es2017: false,
        'shared-node-browser': false,
        node: true,
        commonjs: true
    },
    rules: {
        'no-var': 'warn',
        'no-unused-vars': ['error', {ignoreRestSiblings: true}],
        'padding-line-between-statements': [
            'off',
            {blankLine: 'always', prev: 'block-like', next: '*'},
            {blankLine: 'always', prev: '*', next: 'block-like'}
        ],
        'no-unused-expressions': 'off',
        'object-curly-spacing': 'off',
        'semi': 'off'
    }
};
