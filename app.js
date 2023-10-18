const http = require('http');
const fs = require('fs');
const queryString = require('queryString');
let contentType = require('contentType');

let server = http.createServer((req, res) => {
  if(req.method==='GET'&& req.url === '/'){
    res.writeHead(200, contentType);
    res.end();
  }
})

let PORT = 1005
server.listen()