const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const signUp = require('./mod/signUpAsset');


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
      const praseBody = queryString.parse(body);
      const {id, pw} = praseBody;
      // 비구조화할당 : value 바로 접근하는 방식
      // check 
      console.log(`form 입력으로부터 받은 데이터 확인 :id->`, id);
      console.log(`form 입력으로부터 받은 데이터 확인 :pw->`, pw);

      fs.readFile(paths2, 'utf8', (err, data) => {
        if(err) {
          console.log(err)
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' }); // html 
          // res.writeHead(200, { 'Content-Type': '' }); // html 
          // res.writeHead(200, { 'Content-Type': 'text/plain' }); // only 텍스트만 
          // res.writeHead(200, { 'Content-Type': 'plain/html' }); // 다운로드s
          const praseBody = queryString.parse(body);
  
          let idment = `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>home</title>
            <style>
            *{margin:0; padding: 0; box-sizing: border-box;
              background-color: rgb(66, 66, 66); color: white;
              align-items: center; align-content: center;}
              #root>h1 {
                width: 50vw; height: 50vh; margin: auto; 
                display: flex; flex-direction:column;background-color: rgb(58, 58, 58);
                align-items: center; align-content: center; 
              }
            </style>
          </head>
          <body>
            <div id="root">
              <div>
              <h1>welcome</h1>
                ${id}님 환영합니다<br>
                당신의 비번은${pw}
              </div>
            </div>
          </body>
          </html>`
          res.end(idment + data)
          
        }
      })
    });


  }
});


let port = 2323;
server.listen(port, () => {
console.log(`아래 주소를 누르세요
http://localhost:${port}`)
});