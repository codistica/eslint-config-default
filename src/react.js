const reactConfig = {
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

export {reactConfig};
export default reactConfig;
