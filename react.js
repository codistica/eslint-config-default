/**
 * @license Codistica
 *
 * Copyright (c) 2020, Codistica and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * BUILD DATE: Mon Apr 20 2020 20:42:31 GMT+0200 (Central European Summer Time)
 */

module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['flowtype', 'react'],
    extends: [
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
