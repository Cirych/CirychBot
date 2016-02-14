"use strict";

var mainModule = require('../dist/main.js');
var botModule = require('../dist/bot.js');
var webHookModule = require('../dist/webhook.js');

var environment = {
    token: 'TEST_TOKEN',
    ip: 'TEST_IP',
    port: '',
    domain: 'DNS'
};
var botModulesDir = 'modules';
var botModules = [
    'test', 'test2'
];


process.env.TEST_TOKEN = 'test';
process.env.TEST_IP = 666;

describe('Main module', function () {
    let main;
    beforeEach(() => {
        main = new mainModule.Main(environment, botModules, botModulesDir);
    });
    it('Main ', () => {
        expect(main.test()).toEqual('test');
    });
    it('Bot status Ok', () => {
        expect(main.status('ip')).toEqual('666');
    });
});

describe('Bot module', function () {
    let bot;
    let main = new mainModule.Main(environment, botModules, botModulesDir);
    beforeEach(() => {
        bot = new botModule.Bot(main.getBotModules());
    });
    it('Bot status Ok ', () => {
        expect(bot.test('test')).toEqual('test');
    });
    it('Bot status More Ok', () => {
        expect(bot.test('test2')).toEqual('test2');
    });
    it('Bot status Bad', () => {
        expect(bot.test('test3')).toEqual('no module');
    });
});

describe('webHook module', function () {
    let wh;
    beforeEach(() => {
        wh = new webHookModule.WebHook(environment);
    });
    it('Bot status Ok', () => {
        expect(wh.status('ip')).toEqual('TEST_IP');
    });
    it('Bot status Bad', () => {
        expect(wh.status('port')).toEqual('Panic!');
    });
});