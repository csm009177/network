const http = require('http');
const fs = require('fs');
let contentType =require('./mod/contentType.js')

let server = http.createServer((req,res)=> {
  if(req.method==='GET'&& req.url==='/'){
    res.writeHead(200, contentType)
    res.end('hello')
  }
  if(req.method==='POST'&& req.url==='/'){
    
  }
})

let port = 2315
server.listen(port, ()=> {
  console.log(`
now server is running
please click this link with Clt
http://localhost:${port}
  `
  )
})