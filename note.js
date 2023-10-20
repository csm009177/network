// import big module
const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const docMaker = require('./mod/docMaker');

let maindoc = docMaker('main', 'test');

let serv = http.createServer((req, res)=> {
  // req.on('end', () => { 
  //   console.log(`-----------${req.on()}-----------------`)
  //   res.end(`-----------${req.on()}-----------------`)
  // })
});

serv.listen(8080)


