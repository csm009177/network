const http = require('http');
const fs = require('fs');

let paths = 

let server = http.createServer((req, res)=> {
  if(req.method === 'GET' && req.url==='/') {
    fs.readFile(paths, (err, data))
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('hello')
  }
})
let port = 8080;
server.listen(port, () => {
console.log(`아래 주소를 누르세요
http://localhost:${port}`)
});