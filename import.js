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
    plugins: ['import'],
    extends: [
        'plugin:import/warnings'
    ],
    rules: {
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
    }
};
