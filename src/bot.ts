"use strict";

export class Bot implements IBot {
    private token: string;
    private botModuls: Map<string, any>;
    
    constructor(token: string, botModuls: Map<string, any>) {
        this.token = token;
        this.botModuls = botModuls;
    }
    
    call(update: IUpdate) {
        let reply: IsendMessage = {
            "method":"sendMessage",
            "chat_id":update.message.chat.id,
            "text":"we're working on it's"
        }
        
        return reply;
    }
    
    getName() {
        return 'name of bot ' + this.token;
    }
    
    test(val: string): string {
        let botModule: IBotModule = this.botModuls.get(val);
        return botModule ? botModule.getName(): 'no module';
    }
}