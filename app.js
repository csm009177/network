const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
let contentType = require('./mod/contentType');
let main = './doc/index.html';
let login = './login.html'

let server = http.createServer((req, res) => {
  fs.readFile(main,"utf8",(err,data)=> {
  if(err) {
    console.log('err')
  } else {
    if(req.method==='GET'&& req.url === '/'){
      res.writeHead(200, contentType);
      res.end(data);
      } else if (req.method==='POST' && req.url==='/login'){
        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString(); 
        });
        req.on('end', () => {
          const parsedBody = querystring.parse(body); //요청 본문을 파싱
          const { username, password} = parsedBody;
    
          console.log(`form 입력으로부터 받은 데이터 확인 ->`, parsedBody);
          console.log(`form 입력으로부터 받은 데이터 확인 ->`, username);
          console.log(`form 입력으로부터 받은 데이터 확인 ->`, password);
    
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end(login);
        });
      }
    }
  })
})

let PORT = 1005
server.listen(PORT, () => {
  console.log(`서버 가동중입니다
Clt + click 해주세요
http://localhost:${PORT}`)
})