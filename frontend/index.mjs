import http from "http"
import fs from "fs/promises"
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

http.createServer(async (req, res)=>{
    const indexHtml = await fs.readFile(path.join(__dirname, './static/index.html'),{encoding: 'utf-8'})
    res.writeHead(200,{'Content-Type': 'text/html',});
    res.end(indexHtml.replace('--URL--', process.env[URL] || 'http://localhost:8080'));

}).listen(3000);