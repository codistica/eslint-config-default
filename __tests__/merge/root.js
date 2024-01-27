// NOTE: THIS IS A RANDOM CONFIGURATION.
module.exports = {
    extends: [
        './config-a',
        './config-b'
    ],
    overrides: [
        {
            files: ['**/*.js'],
            extends: ['./config-c']
        },
    ]
};
