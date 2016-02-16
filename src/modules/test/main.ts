"use strict";

export default class Main implements IBotModule {
    public config: IBotModuleConfig = {
        name: 'Test module',
        type: 'text',
    }
    
    public action(message: IMessage): IReply {
        let reply: IsendMessage;
        reply = {
            method: 'sendMessage',
            chat_id: message.chat.id,
            text: 'Help Me I\'m Too Lazy To Escape!'
        }
        return reply;
    }
    
    
    getName(): string {
        return this.config.name;
    }
}