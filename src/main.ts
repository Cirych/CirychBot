"use strict";

import {Settings} from "./Settings";
import {Bot} from "./Bot";

/*
var settings = new Settings({
    token:"from plain"
});
var bot = new Bot(settings);

console.log(bot.test());
*/

export class Main {
    settings: ISettings;
    bot: Bot;
    
    constructor() {
        this.settings = new Settings({token:"from main"});
        this.bot = new Bot(this.settings);
    }
    
    test() {
        return this.bot.test();
    }
}