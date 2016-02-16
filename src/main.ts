"use strict";

import {WebHook} from "./webhook";
import {Bot} from "./bot";
import * as fs from "fs";

export default class Main implements IMain{
    private webHook: any;
    private bots: Map<string, IBot>;
    private botModules: Map<string, IBotModule>;

    constructor(environment: any) {
        this.bots = new Map();
        this.webHook = new WebHook(this.getSettings(environment));
    }
    
    private getSettings(environment: any): IEnvironment {
        let env = process.env;
        return {
            ip: env[environment.ip],
            port: env[environment.port],
            domain: env[environment.domain],
            key: (environment.key ? fs.readFileSync(environment.key) : null),
            cert: (environment.cert ? fs.readFileSync(environment.cert) : null)
        }
    }

    private addBot(botToken: string, botConfig: any): void {
        botToken = process.env[botToken];
        botConfig = botConfig || {default:[]};
        let botModules: Set<IBotModule> = new Set();
        for(let item in botConfig)
            botModules = new Set([...botModules, ...this.setBotModules(item, botConfig[item])]);
        this.webHook.bots.set(botToken, new Bot(botToken, botModules));

        /*
        const newBot = new Bot(botToken, botModules);
        for(let item of botToken)
                this.webHook.bots.set(item, newBot);
        */
    }

    private setBotModules(botModulesDir: string, botModules?: string[]): Set<IBotModule> {
        console.log(botModulesDir);
        if(botModulesDir === 'default') botModulesDir = __dirname + '/modules';
        botModulesDir = botModulesDir || __dirname + '/modules';
        let botModulesList: Set<IBotModule> = new Set();
        if(botModules.length === 0) botModules = this.getBotModulesFromString(botModulesDir);
        for (let moduleName of botModules) {
            try {
                let botModule: IBotModuleNew = require(`${botModulesDir}/${moduleName}/main`).Main;
                botModulesList.add(new botModule());
            } catch (e) {
                console.log('bot module loading error in ' + botModulesDir);
                console.log(e);
            }
        }
        return botModulesList;
    }

    private getBotModulesFromString(botModulesDir: string) {
        try {
            return fs.readdirSync(botModulesDir).filter(function(file) {
                return fs.statSync(botModulesDir + '/' + file).isDirectory();
            });
        } catch (e) {
            console.log('no modules found, start empty bot');
            return [];
        }
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