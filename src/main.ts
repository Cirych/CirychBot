"use strict";

import {Settings} from "./settings";
import {Bot} from "./bot";

export class Main {
    private settings: ISettings;
    private bot: Bot;
    
    constructor() {
        this.settings = new Settings({token:"from main"});
        this.bot = new Bot(this.settings);
    }
    
    test(): string {
        return this.bot.test();
    }
    
    status(): string {
        return this.bot.status();
    }
}