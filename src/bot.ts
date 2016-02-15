"use strict";

export class Bot implements IBot {
    private token: string;
    private botModuls: Map<string, any>;
    
    constructor(token: string, botModuls: Map<string, any>) {
        this.token = token;
        this.botModuls = botModuls;
    }
    
    call(request: JSON) {
        
    }
    
    getName() {
        return 'name of bot ' + this.token;
    }
    
    test(val: string): string {
        let botModule: IBotModule = this.botModuls.get(val);
        return botModule ? botModule.getName(): 'no module';
    }
}