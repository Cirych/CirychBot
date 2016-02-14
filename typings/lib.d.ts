declare interface IEnvironment {
    token: string;
    port: number;
    ip: string;
    domain: string;
    key: Buffer,
    cert: Buffer
    [key: string]: any;
}

declare interface ISettings {
    
}

declare interface IBotModuleNew {
    new (): any;
}

declare interface IBotModule {
    getName(): string;
}