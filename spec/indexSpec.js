"use strict";

var index = require('../index.js');
var mainModule = require('../dist/main.js');
var botModule = require('../dist/bot.js');
var webHookModule = require('../dist/webhook.js');

var enviroment = {
		ip: 'OPENSHIFT_NODEJS_IP',
		port: 'OPENSHIFT_NODEJS_PORT',
		domain: 'OPENSHIFT_APP_DNS',
		//key: "./certs/test.key",
		//cert: "./certs/test.pem"
	};
var bots = {
    'TELEGRAM_TOKEN1': {
        default: ['test','test2']
		},
    'TELEGRAM_TOKEN2': {
        default:[],
        modules2: ['test','test2']
		},
	'TELEGRAM_TOKEN3': {
        modules2: ['test','test2']
		},
	'TELEGRAM_TOKEN4': {
        default: ['test2']
		},
    'TELEGRAM_TOKEN5': {}
};

var token = 'TELEGRAM_TOKEN3';

process.env.TELEGRAM_TOKEN1 = 'test1';
process.env.TELEGRAM_TOKEN2 = 'test2';
process.env.TELEGRAM_TOKEN3 = 'test3';
process.env.TELEGRAM_TOKEN4 = 'test4';
process.env.TELEGRAM_TOKEN5 = 'test5';
process.env.OPENSHIFT_NODEJS_IP = 666;
process.env.OPENSHIFT_NODEJS_PORT = 80;

describe('Whole package', function () {
    let testmodule;
    beforeEach(() => {
        testmodule = index(enviroment, bots);
    });
    it('Index test', () => {
        expect(testmodule.test()).toEqual('666');
    });
    it('Index bad', () => {
        expect(testmodule.status('ip')).toEqual('666');
    });
});
/*
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
*/