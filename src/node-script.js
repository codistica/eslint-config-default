import {engines} from '../package.json';

const nodeScriptConfig = {
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
                version: engines.node,
            }
        ],
        'node/no-unsupported-features/node-builtins': [
            'error',
            {
                version: engines.node
            }
        ]
    }
};

export {nodeScriptConfig};
export default nodeScriptConfig;
