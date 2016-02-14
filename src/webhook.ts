"use strict";

import * as https from "https";
import * as http from "http";
export class WebHook {
    private environment: IEnvironment;
    private webServer: https.Server|http.Server;
    
    constructor(environment: IEnvironment) {
        if(!environment.token) throw new Error('no token');
        this.environment = environment;
        this.webServer = this.environment.key
            ?this.createHttpsServer()
            :this.createHttpServer();
        this.listen();
    }
    
    private createHttpsServer(): https.Server {
        const options: https.ServerOptions = {
            key: this.environment.key,
            cert: this.environment.cert
        }
        return https.createServer(options, this.requestListener);
    }
    
    private createHttpServer(): http.Server {
        return http.createServer(this.requestListener);
    }
    
    private listen(): void {
        this.webServer.listen(
            this.environment.port,
            this.environment.ip
        )
    }
    
    private requestListener(req: http.ServerRequest, res: http.ServerResponse) {
        res.writeHead(200);
        res.end('hello world\n');
    }
    
    test() {
        return this.environment.token
    }
    
    status(test: any): string {
        return this.environment[test] ? this.environment[test] : "Panic!";
    }
}