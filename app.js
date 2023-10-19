const http = require('http');
const docMaker = require('./mod/docMaker');


let serv = http.createServer((req, res)=> {
  if(req.method==='GET'&&req.url==='/'){
    console.log(req.method);
    console.log(req.url);
    res.end(docMaker());
  } else if (req.method==='POST'&&req.url==='/'){
    console.log(req.method);
    console.log(req.url);
  }
});

let port = 2517;
serv.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})