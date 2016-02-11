"use strict";

import {Settings} from "./settings";
import {Bot} from "./bot";

export class Main {
    private bot: Bot;
    private botModules: any;
    
    constructor(environment: any, botModules: string[], botModulesDir: string) {
        this.getSettings(environment)
        this.botModules = this.getBotModules(botModules, botModulesDir)
        this.bot = new Bot(this.getSettings(environment), this.botModules);
    }
    
    private getSettings(environment: any): IEnvironment {
        var env = process.env;

        return {
        token: env[environment.token],
        ip: env[environment.ip],
        port: env[environment.port],
        domain: env[environment.domain]
        }
    }
    
    private getBotModules(botModules: string[], botModulesDir: string): any {
        let botModulesList: any = [];
        for(let module of botModules) {
            try {
                botModulesList.push(require("./" + botModulesDir + '/' + module));
            } catch(e) {
                console.log('bot module loading error');
                console.log(e);
            }
        }
        return botModulesList;
    }
    
    test(): string {
        return this.bot.test();
    }
    
    status(test: any): string {
        return this.bot.status(test);
    }
}