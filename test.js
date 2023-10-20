// import module
const http = require('http');
const fs = require('fs');

// import contents type
const htmlContent = require('./mod/htmlContent');

// import custom module 
const docMaker = require("./mod/docMaker");
const tagMaker = require("./mod/tagMaker");

// make tag
let test = tagMaker('div', 'style', 'content');
// make doc
let testful = docMaker('testpage', "test");

docMaker('testpage', tagMaker('div', 'style', 'content'));

// server
let serv = http.createServer((req,res)=> {
  if(req.method === 'GET' && req.rul === '/'){
    res.writeHead(200, htmlContent);
    res.end(testful)
  }
})

let port = 2317
serv.listen(port, ()=> {
  console.log(`server is running 
http://localhost:${port}
`)
});