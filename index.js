var bot = require("./dist/main");

var enviroment = {
    token: 'TELEGRAM_TOKEN',
    ip: 'OPENSHIFT_NODEJS_IP',
    port: 'OPENSHIFT_NODEJS_PORT',
    domain: 'OPENSHIFT_APP_DNS',
    key: "./certs/test.key",
    cert: "./certs/test.pem"
};
var botModulesDir = 'modules';
var botModules = [
    'test', 'test2'
];
// tests
/*
process.env.TELEGRAM_TOKEN = 'test';
process.env.OPENSHIFT_NODEJS_IP = 'localhost';
process.env.OPENSHIFT_NODEJS_PORT = '443';
*/

bot = new bot.Main(enviroment, botModules, botModulesDir);
console.log(bot.status('ip'));
console.log(bot.test());
