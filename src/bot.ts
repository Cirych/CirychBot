"use strict";

export class Bot {
    private internals: IEnvironment;
    private botModuls: IBotModule[];
    
    constructor(internals: IEnvironment, botModuls: IBotModule[]) {
        if(!internals.token) throw new Error('no token');
        this.internals = internals;
        this.botModuls = botModuls;
    }
    
    test() {
        return this.internals.token
    }
    
    status(test: any): string {
        return this.internals[test] ? "Ok!" : "Panic!";
    }
}