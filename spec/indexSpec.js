"use strict";
//var main = require('../dist/main.js');

/*
describe("main", function () {
    it('should print Hello World!', function () {
        expect(main.test('Hello World!')).toBe('Hello World!');
        expect(main.test('Hello World!')).toMatch(/World/);
    });
});
*/

var main = require('../dist/main.js');
describe('ES6', function () {
    let main;
    beforeEach(() => {
        main = new main.Main();
    });
    it('Testing', () => {
        expect(main.test('Do Something')).toEqual('Do Something');
    });
});