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
var botModule = require('../dist/bot.js');

describe('Main module', function () {
    let main;
    beforeEach(() => {
        main = new mainModule.Main();
    });
    it('Testing', () => {
        expect(main.test()).toEqual('from main');
    });
    it('Bot status Ok', () => {
        expect(main.status()).toEqual('Ok!');
    });
});

describe('Bot module', function () {
    let bot;
    beforeEach(() => {
        bot = new botModule.Bot();
    });
    it('Bot status Bad', () => {
        expect(bot.status()).toEqual('Panic!');
    });
});