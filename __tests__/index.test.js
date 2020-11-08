const chai = require('chai');
const runESLINT = require('./__utils__/run-eslint.js');

describe('Validate ESLint Configs', () => {
    it('Should return no messages for index config.', () => {
        const output = runESLINT('index.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for base config.', () => {
        const output = runESLINT('base.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for base-preset config.', () => {
        const output = runESLINT('base-preset.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for browser config.', () => {
        const output = runESLINT('browser.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for flow config.', () => {
        const output = runESLINT('flow.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for import config.', () => {
        const output = runESLINT('import.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for jsdoc config.', () => {
        const output = runESLINT('jsdoc.js');
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

    it('Should return no messages for prettier config.', () => {
        const output = runESLINT('prettier.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for react config.', () => {
        const output = runESLINT('react.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for react-app config.', () => {
        const output = runESLINT('react-app.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for react-preset config.', () => {
        const output = runESLINT('react-preset.js');
        chai.assert.isEmpty(output.results[0].messages);
    });

    it('Should return no messages for storybook config.', () => {
        const output = runESLINT('storybook.js');
        chai.assert.isEmpty(output.results[0].messages);
    });
});
