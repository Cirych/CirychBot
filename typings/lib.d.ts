declare interface IEnvironment {
    token: string;
    port: number;
    ip: string;
    domain: string;
    [key: string]: any;
}

declare interface ISettings {
    
}

declare interface IBotModule {
    new (): any;
    getName(): string;
}