// import file system 
const fs = require('fs');
// import hyper text
const http = require('http');


// createServer 
http.createServer((req,res)=> {
  if(req.method === 'GET' && req.url === '/'){
    fs.readFile('./doc/index.html', (err, data)=> {
      if(err) {
        console.log(err)
      } else {
        res.writeHead(200, './mod/contentType.js')
        res.end(data)
      }
    })  
  } 
})