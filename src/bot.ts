"use strict";

export class Bot {
    private botModuls: Map<string, any>;
    
    constructor(botModuls: Map<string, any>) {
        this.botModuls = botModuls;
    }
    
    test(val: string): string {
        let botModule: IBotModule = this.botModuls.get(val);
        return botModule ? botModule.getName(): 'no module';
    }
    
    //test = (val: string): string => this.botModuls.get(val).getName();
}