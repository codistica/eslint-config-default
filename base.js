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
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['prettier', 'jsdoc', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:jsdoc/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier'
    ],
    env: {
        es2017: true,
        mocha: true,
        'shared-node-browser': true
    },
    rules: {
        'no-var': 'warn',
        'no-unused-vars': ['error', {ignoreRestSiblings: true}],
        'padding-line-between-statements': [
            'off',
            {blankLine: 'always', prev: 'block-like', next: '*'},
            {blankLine: 'always', prev: '*', next: 'block-like'}
        ],
        'no-prototype-builtins': 'warn',
        'prettier/prettier': 'warn',
        'jsdoc/valid-types': 'error',
        'jsdoc/no-undefined-types': 'error',
        'jsdoc/check-indentation': 'warn',
        'jsdoc/check-tag-names': 'error',
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
        'import/no-unresolved': 'warn',
        'import/named': 'warn',
        'import/no-absolute-path': 'warn',
        'import/no-self-import': 'warn',
        'import/no-cycle': 'warn',
        'import/no-useless-path-segments': 'warn',
        'import/export': 'warn',
        'import/no-deprecated': 'warn',
        'import/no-mutable-exports': 'warn',
        'import/extensions': ['warn', 'ignorePackages'],
        'import/no-default-export': 'warn',
        'import/group-exports': 'warn',
        'import/order': [
            'warn',
            {
                groups: [
                    'builtin',
                    ['external', 'unknown'],
                    'internal',
                    'parent',
                    'sibling',
                    'index'
                ],
                alphabetize: {
                    order: 'asc'
                }
            }
        ],
        'import/newline-after-import': 'warn',
        'import/no-namespace': 'off',
        'import/no-duplicates': 'warn',
        'import/exports-last': 'warn'
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
