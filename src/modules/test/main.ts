"use strict";

export default class Main implements IBotModule {
    private name: string;
    
    constructor() {
        this.name = 'test';
    }
    
    getName(): string {
        return this.name;
    }
}