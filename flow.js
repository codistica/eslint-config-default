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
    plugins: ['flowtype'],
    rules: {
        'flowtype/boolean-style': ['error', 'boolean'],
        'flowtype/define-flow-type': 'warn',
        'flowtype/delimiter-dangle': 'off',
        'flowtype/generic-spacing': ['error', 'never'],
        'flowtype/no-mixed': 'off',
        'flowtype/no-types-missing-file-annotation': 'error',
        'flowtype/no-weak-types': 'off',
        'flowtype/require-parameter-type': 'off',
        'flowtype/require-readonly-react-props': 'off',
        'flowtype/require-return-type': 'off',
        'flowtype/require-valid-file-annotation': 'off',
        'flowtype/semi': 'off',
        'flowtype/space-after-type-colon': ['error', 'always'],
        'flowtype/space-before-generic-bracket': ['error', 'never'],
        'flowtype/space-before-type-colon': ['error', 'never'],
        'flowtype/type-id-match': 'off',
        'flowtype/union-intersection-spacing': ['error', 'always'],
        'flowtype/use-flow-type': 'warn'
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true
        }
    }
};
