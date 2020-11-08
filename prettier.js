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
    plugins: ['prettier'],
    extends: [
        'prettier',
        'prettier/babel',
        'prettier/flowtype',
        'prettier/react'
    ],
    rules: {
        'prettier/prettier': 'warn'
    }
};
