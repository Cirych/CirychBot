"use strict";

export class Bot implements IBot {
    private token: string;
    private botModulsTypes: Map<string, Set<IBotModule>>;
    private botModulsCommanders: Map<string, IBotModule>;
    
    
    constructor(token: string, botModuls: Set<IBotModule>) {
        this.token = token;
        this.botModulsTypes = new Map<string, Set<IBotModule>>();
        this.botModulsCommanders = new Map<string, IBotModule>();
        this.setModulsTypes(botModuls);
    }
    
    call(update: IUpdate): IReply|boolean {
        //Object.assign() -???
        let reply: IsendMessage = {
            "method": "sendMessage",
            "chat_id": update.message.chat.id,
            "text": "we're working on it's"
        }
        
        if(update.message && update.message.text && update.message.text.startsWith('/')) {
            let command: string = update.message.text.match(/^\/[\w]+/)[0];
            try {
                let botModule: IBotModule = this.botModulsCommanders.get(command);
                let reply: IReply = botModule.action(update.message);
                return reply;
            } catch (e) {
                console.log('no modules with command: ' + command);
                return reply;
            }
        }
        
        
        //TODO: pishet otvet...
        return reply;
    }
    
    private setModulsTypes(botModuls: Set<IBotModule>): void {
        let botModulsTypes: Map<string, Set<IBotModule>> = new Map();
        for(let botModule of botModuls) {
            let curType: string = botModule.config.type;
            if(botModule.config.command) {
                this.botModulsCommanders.set(botModule.config.command, botModule);
                //TODO: continue;
            }
            if(botModulsTypes.get(curType))
                this.botModulsTypes.get(curType).add(botModule);
            else {
                let newSet = new Set<IBotModule>();
                this.botModulsTypes.set(curType, newSet.add(botModule));
            }
        }
    }
    
    
    getName() {
        return 'name of bot ' + this.token;
    }
}