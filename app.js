const http = require('http');
const docMaker = require('./mod/docMaker');

const cssContent = require('./mod/cssContent.js');
const htmlContent = require('./mod/htmlContent.js');

let maindoc = docMaker('main', 'test');


let serv = http.createServer((req, res)=> {
  if(req.method==='GET'&&req.url==='/'){
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, {
      'Content-Type' : 'text/html', 'charset' : 'utf8', });
    res.end(maindoc);
  } else if(req.url==='/doc/style.css'){
    res.writeHead(200, { 'Content-Type' : 'text/css', 'charset' : 'utf8', });
    res.end('/doc/style')
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