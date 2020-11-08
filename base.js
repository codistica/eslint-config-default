/**
 * @license Codistica
 *
 * Copyright (c) 2020, Codistica and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 */

module.exports = {
    root: true,
    noInlineConfig: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        babelOptions: {
            root: __dirname,
            rootMode: 'upward-optional'
        }
    },
    plugins: ['@babel'],
    extends: [
        'eslint:recommended'
    ],
    env: {
        es2017: true,
        mocha: true,
        'shared-node-browser': true
    },
    rules: {
        // ESLINT
        'no-var': 'warn',
        'no-unused-vars': ['error', {ignoreRestSiblings: true}],
        'padding-line-between-statements': [
            'off',
            {blankLine: 'always', prev: 'block-like', next: '*'},
            {blankLine: 'always', prev: '*', next: 'block-like'}
        ],
        'no-prototype-builtins': 'warn',

        // BABEL
        'new-cap': 'off',
        '@babel/new-cap': 'error',
        'no-invalid-this': 'off',
        '@babel/no-invalid-this': 'error',
        'no-unused-expressions': 'off',
        '@babel/no-unused-expressions': 'error',
        'object-curly-spacing': 'off',
        '@babel/object-curly-spacing': 'error',
        'semi': 'off',
        '@babel/semi': 'error'
    }
};
