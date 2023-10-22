// import module
const http = require('http');
const fs = require('fs');

// import contents type
const htmlContent = require('./mod/htmlContent');

// import custom module 
const docMaker = require("./mod/docMaker");
const tagMaker = require("./mod/tagMaker");
const formMaker = require('./mod/tagMaker');
const basic = require('./mod/tagMaker');

// make tag
let tag1 = tagMaker('div', basic(), formMaker());
let tag2 = tagMaker('div', basic(), tag1);

// console.log(tag)
// make doc`
let doc = docMaker('testpage', tag2);
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