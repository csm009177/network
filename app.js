const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res)=> {
  if(req.method==='GET'&& req.url==='/'){
    res.writeHead()
    res.end()
  }
})