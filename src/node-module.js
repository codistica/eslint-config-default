import {engines} from '../package.json';

const nodeModuleConfig = {
    plugins: ['node'],
    extends: ['plugin:node/recommended-module'],
    globals: {
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly'
    },
    env: {
        'shared-node-browser': false,
        node: true
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
                ignores: ['dynamicImport', 'modules']
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

export {nodeModuleConfig};
export default nodeModuleConfig;
