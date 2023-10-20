// import big module
const http = require('http');
const fs = require('fs');
const docMaker = require('./mod/docMaker');


// import contentType
let cssContent = require('./mod/cssContent.js');
let htmlContent = require('./mod/htmlContent.js');

//make doc 
let maindoc = docMaker('main', 'test');

// fnc check method and url

// serv 
let serv = http.createServer((req, res)=> {
  
  if(req.method==='GET'&&req.url==='/'){
    methodAndurlCheck()
    console.log(`
    method check:${req.method}
    url check:${req.url}`);

    res.writeHead(200, htmlContent);
    res.end(maindoc);
  } else if(req.url==='/doc/style.css'){
    console.log(`
    method check:${req.method}
    url check:${req.url}`)
    
    fs.readFile('./doc/style.css', (err,data)=> {
      if(err){
        console.log(`
    readFile err check${err}`);

      } else {
        res.writeHead(200, cssContent);
        res.end(data);

        console.log(`
    type fo data : ${typeof(data)}`);

        }
      })
    } 
    
  else if (req.method==='POST'&&req.url==='/'){
    console.log(`
    method check:${req.method}
    url check:${req.url}`);
  }
});


// serv.listen 
let port = 2517;
serv.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})