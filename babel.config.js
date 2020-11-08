/**
 * @function babelConfig
 * @description Babel configuration function.
 * @param {Object<string,*>} [api] - Babel configuration API.
 * @returns {Object<string,*>} Babel configuration object.
 */
module.exports = function babelConfig(api) {
    api.cache(true);
    return {
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ],
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-flow'
        ]
    };
};
