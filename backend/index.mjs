import http from "http"
import buildmeta from "./buildmeta.json" assert { type: 'json' };

const server = http.createServer((req, res) =>{
    res.writeHead(200,{'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});
    res.end(JSON.stringify({
        buildmeta,
        environment: process.env['ENVIRONMENT']
    }));
});
server.listen(8080,'0.0.0.0')
console.log('Started to listen on 0.0.0.0:8080')