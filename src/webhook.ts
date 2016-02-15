"use strict";

import * as https from "https";
import * as http from "http";
export class WebHook {
    private environment: IEnvironment;
    private webServer: https.Server|http.Server;
    private bots: Map<string, IBot>;
    
    constructor(environment: IEnvironment) {
        this.bots = new Map();
        if(!environment.ip) throw new Error('no token');
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
        return https.createServer(options, (req: http.ServerRequest, res: http.ServerResponse)=>this.requestListener(req, res));
    }
    
    private createHttpServer(): http.Server {
        return http.createServer((req: http.ServerRequest, res: http.ServerResponse)=>this.requestListener(req, res));
    }
    
    private listen(): void {
        this.webServer.listen(
            this.environment.port,
            this.environment.ip
        )
    }
    
    private requestListener(req: http.ServerRequest, res: http.ServerResponse) {
        let token = req.url.substr(1);
        if(!this.bots.has(token)) {
            res.statusCode = 401;
            res.end();
        } else if(req.method === 'POST') {
            let body: string = '';
            req.on('data', (chunk: string)=>body+=chunk.toString);
            req.on('end', () => {
                this.bots.get(token).call(JSON.parse(body));
                res.writeHead(200);
                res.end('OK');
            });
        } else {
            res.statusCode = 418;
            res.end();
        }
    }
    
    test() {
        return this.environment.ip
    }
    
    status(test: any): string {
        return this.environment[test] ? this.environment[test] : "Panic!";
    }
}