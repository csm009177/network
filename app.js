const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=> {
  if(req.method === 'GET' && req.url==='/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('hello')
  }
})
let port = 8080;
server.listen(port, () => {
console.log(`아래 주소를 누르세요
http://localhost:${port}`)
});