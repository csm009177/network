const http = require('http');
const docMaker = require('./mod/docMaker');
const contentType = require('./mod/contentType.js');

let maindoc = docMaker('main', 'test');


let serv = http.createServer((req, res)=> {
  if(req.method==='GET'&&req.url==='/'){
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, contentType);
    res.end(maindoc);
  } else if(req.url==='/doc/style.css'){
    res.writeHead(200, contentType);
    res.end()
  }
  
  
  
  else if (req.method==='POST'&&req.url==='/'){
    console.log(req.method);
    console.log(req.url);
  }
});

let port = 2517;
serv.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})