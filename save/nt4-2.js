// import file system 
const fs = require('fs');
// import hyper text
const http = require('http');
const queryString = require('querystring');
const contentType = require('../mod/contentType');

let main = './doc/index.html';
let login = './doc/login.html';

// createServer 
let server = http.createServer((req,res)=> {
  if(req.method === 'GET' && req.url === '/'){
    fs.readFile(main, 'utf8', (err, data)=> {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, contentType);
        res.end(data);
      };
    });  
  } else if (req.method=== 'POST' && req.url === '/doc/login.html'){
    let body ='';
    req.on('data', (chunk) =>{
      body += chunk.toString();
    })

    req.on('end', () => {
      const parsedBody = queryString.parse(body);
      const {username, password} = parsedBody;

      // check 
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, parsedBody);
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, username);
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, password);
    })
    fs.readFile(login, 'utf8', (err, data)=> {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, contentType)
        res.end(data)
      }
    })
  }
});

let port = 2345
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
})