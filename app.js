// import big module
const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const docMaker = require("./mod/docMaker");

// import contentType
let htmlContent = require("./mod/htmlContent.js");

//make doc
let maindoc = docMaker("main", "test");

// serv
let serv = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    //check method and url
    console.log(`
    method check : ${req.method}
    url check : ${req.url}`);
    
    res.writeHead(200, htmlContent);
    res.end(maindoc);

  } else if(req.method === "POST" && req.url === "/login") {
    let body = '';    
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
    const parsedBody = queryString.parse(body); //요청 본문을 파싱
    const { username, password} = parsedBody;

      console.log(`form parsedBody : `, parsedBody);
      console.log(`form username   : `, username);
      console.log(`form password   : `, password);

      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('login success!!');
    });
  }
})

// serv.listen
let port = 2517;
serv.listen(port, () => {
  console.log(`http://localhost:${port}`);
});