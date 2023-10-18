const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
let contentType = require('./mod/contentType');

let server = http.createServer((req, res) => {
  fs.
  if(req.method==='GET'&& req.url === '/'){
    res.writeHead(200, contentType);
    res.end();
  }
})

let PORT = 1005
server.listen(PORT, () => {
  console.log(`서버 가동중입니다
Clt + click 해주세요
http://localhost:${PORT}  `)
})