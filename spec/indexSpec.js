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

var mainModule = require('../dist/main.js');
describe('ES6', function () {
    let main;
    beforeEach(() => {
        main = new mainModule.Main();
    });
    it('Testing', () => {
        expect(main.test('Success')).toEqual('Success');
    });
});