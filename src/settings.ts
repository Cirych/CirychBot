"use strict";

export class Settings implements ISettings {
    token: string;
    
    constructor(settings: any) {
        this.token = settings.token;
    }
}