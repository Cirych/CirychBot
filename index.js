"use strict";

const main = require("./dist/main").Main;

function MultiBot(enviroment, botsConfig) {

    const multiBot = new main(enviroment);
    if(typeof botsConfig == 'string')
        multiBot.addBot(botsConfig);
    else
        for(let token in botsConfig) multiBot.addBot(token, botsConfig[token]);
 //destructurig for(let [key, value] of botsConfig)       
    //var test = () => 'test';
    if(enviroment.webhook)
        multiBot.webHook.setWebhook();
    return multiBot;
}
module.exports = exports = MultiBot;
