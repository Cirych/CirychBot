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
    
    public setWebhook() {
        for (let token of this.bots.keys()) {
            let webhook = JSON.stringify({
                'url': 'https://' + this.environment.domain + "/" + token
            });
            let options = {
                protocol: 'https:',
                hostname: 'api.telegram.org',
                path: '/bot' + token + '/setWebhook',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': webhook.length
                }
            };
            requestPromise(options, webhook).then(function(data: any) {
                console.log("%s@%s: %s", data.name, data.version, data.description);
            }, function(err) {
                console.error("%s; %s", err.message, webhook);
                console.log("%j", err.res.statusCode);
            });
        }
        function requestPromise(options: {}, webhook: string) {
            return new Promise(function(resolve, reject) {
                var req = https.request(options, (res) => {
                    console.log(`STATUS: ${res.statusCode}`);
                    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
                    res.setEncoding('utf8');
                    res.on('data', (chunk: string) => {
                        console.log(`BODY: ${chunk}`);
                    });
                    res.on('end', () => {
                        console.log('No more data in response.')
                    })
                });
                req.on('error', (e: ErrorEvent) => {
                    console.log(`problem with request: ${e.message}`);
                });
                req.write(webhook);
                req.end();
            });
        }
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
        } else if(true) { //req.method === 'POST'
            let body: string = '';
            req.on('data', (chunk: string)=>body+=chunk.toString());
            req.on('end', () => {
                try {
                let update = this.bots.get(token).call(JSON.parse(body));
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(200);
                res.end(JSON.stringify(update));
                } catch(e) {
                    console.log('error in request ' + e);
                    res.writeHead(404);
                    res.end('OK');
                }
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