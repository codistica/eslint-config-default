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
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['jsdoc', 'flowtype', 'react'],
    extends: [
        'react-app',
        'prettier/flowtype',
        'prettier/react',
        'plugin:flowtype/recommended',
        'plugin:react/recommended'
    ],
    rules: {
        'jsdoc/check-tag-names': [
            'warn',
            {
                definedTags: ['flow']
            }
        ],
        'react/require-default-props': 'error'
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true
        },
        react: {
            version: 'detect'
        }
    }
};
