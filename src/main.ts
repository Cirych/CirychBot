"use strict";

import {Settings} from "./settings";
import {WebHook} from "./webhook";
import {Bot} from "./bot";

export default class Main {
    private webHook: any;
    private bot: Bot;
    private botModules: Map<string, IBotModule>;
    
    constructor(environment: any, botModules: string[], botModulesDir: string) {
        this.webHook = new WebHook(this.getSettings(environment));
        this.botModules = this.setBotModules(botModules, botModulesDir)
        this.bot = new Bot(this.botModules);
    }
    
    private getSettings(environment: any): IEnvironment {
        let env = process.env;
        return {
        token: env[environment.token],
        ip: env[environment.ip],
        port: env[environment.port],
        domain: env[environment.domain]
        }
    }
    
    private setBotModules(botModules: string[], botModulesDir: string): Map<string, IBotModule> {
        let botModulesList: Map<string, IBotModule> = new Map();
        for(let moduleName of botModules) {
            try {
                let botModule: IBotModule = require(`./${botModulesDir}/${moduleName}/main`).Main;
                botModulesList.set(moduleName, new botModule());
            } catch(e) {
                console.log('bot module loading error');
                console.log(e);
            }
        }
        return botModulesList;
    }
    
    getBotModules(): Map<string, IBotModule> {
        return this.botModules;
    }
    
    test(): string {
        return this.webHook.test();
    }
    
    status(test: any): string {
        return this.webHook.status(test);
    }
}