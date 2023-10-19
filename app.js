const http = require('http');
const fs = require('fs');

http.createServer((req, res)=> {
  if(req.method === 'GET' && req.url==='/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('hello')
  }
}).listen(8080);