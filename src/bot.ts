"use strict";

export class Bot {
    private internals: ISettings;
    
    constructor(internals: ISettings) {
        this.internals = internals;
    }
    
    test() {
        return this.internals.token;
    }
}