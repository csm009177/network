// import module
const http = require('http');
const fs = require('fs');

// import contents type
const htmlContent = require('./mod/htmlContent');

// import custom module 
const docMaker = require("./mod/docMaker");
const tagMaker = require("./mod/tagMaker");

// make tag
let tag = tagMaker('div', 'style', 'content');
// console.log(tag)
// make doc`
let doc = docMaker('testpage', tag);
// console.log(doc)


let serv = http.createServer((req, res)=> {
  if(req.method==='GET'){

  }
})

serv.listen(2317);