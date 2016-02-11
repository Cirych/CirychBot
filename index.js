var bot = require("./dist/main");

var enviroment = {
    token: 'TELEGRAM_TOKEN',
    ip: 'OPENSHIFT_NODEJS_IP',
    port: 'OPENSHIFT_NODEJS_PORT',
    domain: 'OPENSHIFT_APP_DNS'
};
var botModulesDir = 'modules';
var botModules = [
    'test', 'test2'
];

bot = new bot.Main(enviroment, botModules, botModulesDir);
console.log(bot.status('ip'));
console.log(bot.test());
