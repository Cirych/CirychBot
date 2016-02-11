"use strict";

export class Settings implements ISettings {
    token: string;
    port: number;
    ip: string;
    domain: string;
    
    constructor(settings: any) {
        this.token = settings.token;
        this.port = settings.port;
        this.ip = settings.ip;
        this.domain = settings.domen;
    }
}