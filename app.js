const http = require('http');


let contentType = require('./mod/contentType.js');
let docMaker = require('./mod/docMaker.js');

let serv = http.createServer(function(req, res){
  // doc make
let main = docMaker(); // 문제

  // main page
  // check mothod 
  if(req.method==='GET' && request.url=== '/'){
    // err find
    res.writeHead(200, contentType)
    res.end(main);
  } 
});


let PORT = 2234;
serv.listen(PORT, () => {
  console.log(`
now server is working
please request with this link(Clt + click)
http://localhost:${PORT}`)
}) 