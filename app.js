const http = require('http');
const docMaker = require('./mod/docMaker');
const htmlContent = require('./mod/htmlContent.js');
const cssContent = require('./mod/cssContent.js');

let maindoc = docMaker('main', 'test');


let serv = http.createServer((req, res)=> {
  if(req.method==='GET'&&req.url==='/'){
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, htmlContent);
    res.end(maindoc);
  } else if(req.url==='/doc/style.css'){
    res.writeHead(200, cssContent);
    res.end('/doc/style.css')
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