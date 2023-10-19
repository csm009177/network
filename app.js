const http = require('http');
const fs = require('fs');

let paths1 = '/doc/nt3.html';
let paths2 = '/doc/login.html';

let server = http.createServer((req, res)=> {
  if(req.method === 'GET' && req.url==='/') {
    fs.readFile(paths1, 'utf8', (err, data)=> {
      if(err) {
        console.log(err)
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data)
      };
    });
  } else if (req.method === 'POST'&& req.url==='/login'){
    let body = '';
    req.on('data', (chunk) => {
      body = chunk.toString();
    })
    
    req.on('end', () => { 
      const parsedBody = queryString.parse(body);
      const {username, password} = parsedBody;

      // check 
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, parsedBody);
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, username);
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, password);

    })

    fs.readFile(paths2, 'utf8', (err, data) => {
      if(err) {
        console.log(err)
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data)
      }
    })
  }
});


let port = 8080;
server.listen(port, () => {
console.log(`아래 주소를 누르세요
http://localhost:${port}`)
});