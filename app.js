const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

let paths1 = './doc/index.html';
let paths2 = './doc/login.html'; // 로그인 되고 나서 페이지

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
  }
});


let port = 2323;
server.listen(port, () => {
console.log(`아래 주소를 누르세요
http://localhost:${port}`)
});