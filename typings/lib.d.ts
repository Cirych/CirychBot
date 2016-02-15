declare interface IEnvironment {
    port: number;
    ip: string;
    domain: string;
    key: Buffer,
    cert: Buffer,
    [key: string]: any
}

declare interface IBot {
    getName(): string;
    call(request: JSON): void;
}

declare interface IBotModuleNew {
    new (): any;
}

declare interface IBotModule {
    getName(): string;
}