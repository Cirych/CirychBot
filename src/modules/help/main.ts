"use strict";

export default class Main implements IBotModule {
    public config: IBotModuleConfig = {
        name: 'Help module',
        type: 'command',
        command: '/help'
    }
    
    public action(message: IMessage): IReply {
        let reply: IsendMessage;
        reply = {
            method: 'sendMessage',
            chat_id: message.chat.id,
            text: '<a href="https://github.com/Cirych/CirychBot">Try here</a>',
            parse_mode: 'HTML'
        }
        return reply;
    }
    
    getName(): string {
        return this.config.name;
    }
}