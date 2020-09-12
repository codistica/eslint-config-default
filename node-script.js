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
    plugins: ['node'],
    extends: ['plugin:node/recommended-script'],
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'script'
    },
    env: {
        es2017: false,
        'shared-node-browser': false,
        node: true,
        commonjs: true
    },
    rules: {
        'node/shebang': [
            'error',
            {
                convertPath: {
                    'src/bin/**/*.js': ['^src/(.+?)\\.js$', 'lib/$1.js']
                }
            }
        ],
        'node/no-unsupported-features/es-syntax': [
            'error',
            {
                version: '>=10.0',
            }
        ],
        'node/no-unsupported-features/node-builtins': [
            'error',
            {
                version: '>=10.0'
            }
        ]
    }
};
