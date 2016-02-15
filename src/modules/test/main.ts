"use strict";

export default class Main implements IBotModule {
    private name: string;
    
    constructor() {
        this.name = 'testble botssss';
    }
    
    getName(): string {
        return this.name;
    }
}