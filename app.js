// import big module
const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const docMaker = require("./mod/docMaker");
queryString.parse();

// import contentType
let cssContent = require("./mod/cssContent.js");
let htmlContent = require("./mod/htmlContent.js");

//make doc
let maindoc = docMaker("main", "test");
// fnc check method and url


console.log(`data type : ${typeof(data)}`);


// serv
let serv = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    //check method and url
    console.log(`
    method check : ${req.method}
    url check : ${req.url}`);
    
    res.writeHead(200, htmlContent);
    res.end(maindoc);
  } else if (req.url === "/doc/style.css") {
    //check method and url
    console.log(`
    method check : ${req.method} 
    url check : ${req.url}`);

    fs.readFile("./doc/style.css", "utf8", (err, data) => {
      if (err) { console.log(`readFile err check : ${err}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data)
      };
    });
  } else if (req.method === 'POST' && req.url === '/doc/login.html'){

    let body = '';
    
    req.on('data', (chunk) => {
      body = body + chunk.toString();
    });

    req.on('end', () => { 
      const parsedBody = queryString.parse(body);
      const {username, password} = parsedBody;
      // 비구조화할당 : value 바로 접근하는 방식
      // check 
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, parsedBody);
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, username);
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, password);

    });

    fs.readFile(paths2, 'utf8', (err, data) => {
      if(err) {
        console.log(err)
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data)
      }
    })
    fs.readFile(style1, 'utf8', (err, data) => {
      if(err) {
        console.log(err)
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data)
      }
    })
  }
});


let port = 2323;
server.listen(port, () => {
console.log(`아래 주소를 누르세요
http://localhost:${port}`)
});
