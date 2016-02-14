"use strict";

export class Settings implements ISettings {
    token: string;
    port: number;
    ip: string;
    domain: string;
    key: string;
    cert: string;
    
    constructor(settings: any) {
        this.token = settings.token;
        this.port = settings.port;
        this.ip = settings.ip;
        this.domain = settings.domen;
        this.key = settings.key;
        this.cert = settings.cert;
    }
}