"use strict";

var environment = {
    token: 'TEST_TOKEN',
    ip: 'TEST_IP',
    port: '',
    domain: 'DNS'
};
var botModulesDir = 'modules';
var botModules = [
    'test'
];

process.env.TEST_TOKEN = 'test';
process.env.TEST_IP = 666;

var mainModule = require('../dist/main.js');
var botModule = require('../dist/bot.js');

describe('Main module', function () {
    let main;
    beforeEach(() => {
        main = new mainModule.Main(environment, botModules, botModulesDir);
    });
    it('Testing', () => {
        expect(main.test()).toEqual('test');
    });
    it('Bot status Ok', () => {
        expect(main.status('ip')).toEqual('Ok!');
    });
});

describe('Bot module', function () {
    let bot;
    beforeEach(() => {
        bot = new botModule.Bot(environment, botModules);
    });
    it('Bot status Bad', () => {
        expect(bot.status('port')).toEqual('Panic!');
    });
});