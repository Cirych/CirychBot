/*
process.env.TELEGRAM_TOKEN1 = 'token_test1';
process.env.TELEGRAM_TOKEN2 = 'token_test2';
process.env.TELEGRAM_TOKEN3 = 'test3';
process.env.OPENSHIFT_NODEJS_IP = 'localhost';
process.env.OPENSHIFT_NODEJS_PORT = '80';

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

process.env.TELEGRAM_BOT_TOKEN = 'test';
process.env.TELEGRAM_BOT_TOKEN2 = 'test2';
process.env.OPENSHIFT_NODEJS_IP = 'localhost';
process.env.OPENSHIFT_NODEJS_PORT = '80';
process.env.OPENSHIFT_APP_DNS = 'localhost';

*/

var enviroment = {
		ip: 'OPENSHIFT_NODEJS_IP',
		port: 'OPENSHIFT_NODEJS_PORT',
		domain: 'OPENSHIFT_APP_DNS',
		//key: "./certs/test.key",
		//cert: "./certs/test.pem"
	}
	
var bots = {
    'TELEGRAM_BOT_TOKEN': {
        default: ['test','test2']
		}
};




require("cirych-bot")(enviroment, bots);