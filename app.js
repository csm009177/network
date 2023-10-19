
const http = require('http');
const fs = require('fs');

let contentType =require('./mod/contentType.js');
let docMaker = require('./mod/docMaker.js');

let main =docMaker('main', 'test', 'test1');

let server = http.createServer((req,res)=> {
  if(req.method==='GET'&& req.url==='/'){
    res.writeHead(200, contentType);
    res.end(main);
  }
})

let port = 2315
server.listen(port, ()=> {
  console.log(`
now server is running
please click this link with Ctrl
http://localhost:${port}
  `)
})