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
    plugins: ['jsdoc'],
    extends: [
        'plugin:jsdoc/recommended'
    ],
    rules: {
        'jsdoc/valid-types': 'error',
        'jsdoc/no-undefined-types': 'error',
        'jsdoc/check-indentation': 'warn',
        'jsdoc/check-tag-names': [
            'error',
            {
                definedTags: ['flow']
            }
        ],
        'jsdoc/check-param-names': 'error',
        'jsdoc/check-property-names': 'error',
        'jsdoc/require-jsdoc': [
            'warn',
            {
                require: {
                    ArrowFunctionExpression: true,
                    ClassDeclaration: true,
                    ClassExpression: true,
                    FunctionDeclaration: true,
                    FunctionExpression: true,
                    MethodDefinition: true
                },
                exemptEmptyFunctions: false
            }
        ],
        'jsdoc/require-description': [
            'warn',
            {
                descriptionStyle: 'tag',
                exemptedBy: [
                    'see',
                    'todo',
                    'type',
                    'typedef',
                    'callback',
                    'constant',
                    'module',
                    'namespace',
                    'classdesc',
                    'flow'
                ],
                contexts: ['any']
            }
        ],
        'jsdoc/require-description-complete-sentence': [
            'warn',
            {
                tags: ['description']
            }
        ],
        'jsdoc/require-property': 'warn',
        'jsdoc/require-property-name': 'warn',
        'jsdoc/require-property-type': 'warn',
        'jsdoc/require-property-description': 'warn',
        'jsdoc/require-hyphen-before-param-description': [
            'warn',
            'always',
            {
                tags: {
                    property: 'always'
                }
            }
        ],
        'jsdoc/require-param': [
            'warn',
            {
                exemptedBy: ['see']
            }
        ],
        'jsdoc/require-param-name': ['error', {contexts: ['any']}],
        'jsdoc/require-param-type': ['error', {contexts: ['any']}],
        'jsdoc/require-param-description': ['warn', {contexts: ['any']}],
        'jsdoc/require-returns': [
            'warn',
            {
                exemptedBy: ['see'],
                forceRequireReturn: true,
                forceReturnsWithAsync: true,
                contexts: ['any']
            }
        ],
        'jsdoc/require-returns-type': ['error', {contexts: ['any']}],
        'jsdoc/require-returns-description': ['warn', {contexts: ['any']}],
    },
    settings: {
        jsdoc: {
            mode: 'jsdoc',
            tagNamePreference: {
                returns: 'returns',
                property: 'property',
                param: 'param',
                augments: 'extends',
                description: 'description',
                function: 'function'
            },
            overrideReplacesDocs: false,
            preferredTypes: {
                object: 'Object'
            },
            ignorePrivate: true
        }
    }
};
