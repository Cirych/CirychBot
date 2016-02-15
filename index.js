"use strict";

const main = require("./dist/main").Main;

function MultiBot(enviroment, botsConfig) {

    const multiBot = new main(enviroment);
    if(typeof botsConfig == 'string')
        multiBot.addBot(botsConfig);
    else
        for(let token in botsConfig) multiBot.addBot(token, botsConfig[token]);
        
    //var test = () => 'test';
    multiBot.webHook.setWebhook();
    return multiBot;
}
module.exports = exports = MultiBot;
