// import big module
const http = require('http');
const fs = require('fs');
const docMaker = require('./mod/docMaker');


// import contentType
let cssContent = require('./mod/cssContent.js');
let htmlContent = require('./mod/htmlContent.js');

//make doc 
let maindoc = docMaker('main', 'test');


// serv 
let serv = http.createServer((req, res)=> {
  
  if(req.method==='GET'&&req.url==='/'){
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, htmlContent);
    res.end(maindoc);
  } else if(req.url==='/doc/style.css'){
    console.log(req.method);
    console.log(req.url);
    
    fs.readFile('./doc/style.css', (err,data)=> {
      if(err){
        console.log(err);
      } else {
        res.writeHead(200, cssContent);
        res.end(data);
        
        }
      })
    } 
    
  else if (req.method==='POST'&&req.url==='/'){
    console.log(req.method);
    console.log(req.url);
  }
});


// serv.listen 
let port = 2517;
serv.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})