"use strict";

const eslint = require('eslint');

module.exports = function runESLINT(configFile, text) {
    const CLIEngine = eslint.CLIEngine;
    const cli = new CLIEngine({
        configFile: configFile
    });

    return cli.executeOnText(text || '');
}
