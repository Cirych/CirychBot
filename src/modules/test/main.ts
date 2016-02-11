"use strict";

export class Main {
    private name: string;
    
    constructor() {
        this.name = 'test';
    }
    
    getName(): string {
        return this.name;
    }
}