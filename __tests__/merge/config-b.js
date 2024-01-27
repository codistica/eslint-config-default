// NOTE: THIS IS A RANDOM CONFIGURATION.
module.exports = {
    parserOptions: {
        sourceType: 'script'
    },
    env: {
        'shared-node-browser': false,
        node: true
    },
    rules: {
        'no-unused-vars': ['error', {ignoreRestSiblings: false}],
        'no-prototype-builtins': 'warn',
        'new-cap': 'off',
        'no-invalid-this': 'off',
    }
};
