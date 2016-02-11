"use strict";

export class WebHook {
    private environment: IEnvironment;
    
    constructor(environment: IEnvironment) {
        if(!environment.token) throw new Error('no token');
        this.environment = environment;
    }
    
    test() {
        return this.environment.token
    }
    
    status(test: any): string {
        return this.environment[test] ? "Ok!" : "Panic!";
    }
}