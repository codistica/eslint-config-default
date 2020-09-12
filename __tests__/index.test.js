const chai = require('chai');
const runESLINT = require('./__utils__/run-eslint.js');

describe('Validate ESLint Configs', () => {
    it('Should return no messages for base config.', () => {
        const output = runESLINT('base.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for browser config.', () => {
        const output = runESLINT('browser.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for node-module config.', () => {
        const output = runESLINT('node-module.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for node-script config.', () => {
        const output = runESLINT('node-script.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for react config.', () => {
        const output = runESLINT('react.js');
        chai.assert.isEmpty(output.results[0].messages);
    });
});
