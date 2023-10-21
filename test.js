// import module
const http = require('http');
const fs = require('fs');

// import contents type
const htmlContent = require('./mod/htmlContent');

// import custom module 
const docMaker = require("./mod/docMaker");
const tagMaker = require("./mod/tagMaker");

// make tag
let tag2 = tagMaker('div', 'style', 'content');
let tag1 = tagMaker('div', 'style', 'content');
let all = tag1 + tag2
// console.log(tag)
// make doc`
let doc = docMaker('testpage', all);
// console.log(doc)


let serv = http.createServer((req, res)=> {
  if(req.method==='GET'){
    console.log(req.method);
    res.writeHead(200, htmlContent)
    res.end(doc)
  }
})

let port = 2517;
serv.listen(port, () => {
  console.log(`http://localhost:${port}`);
});