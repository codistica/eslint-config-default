// NOTE: THIS IS A RANDOM CONFIGURATION.
module.exports = {
    rules: {
        'padding-line-between-statements': [
            'off',
            {blankLine: 'always', prev: 'block-like', next: '*'},
            {blankLine: 'never', prev: '*', next: 'block-like'}
        ],
        'no-unused-expressions': 'warn',
        'object-curly-spacing': 'off',
        'semi': 'warn'
    }
};
