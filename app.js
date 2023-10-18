// import file system 
const fs = require('fs');
// import hyper text
const http = require('http');
const contentType = require('./mod/contentType');


// createServer 
let server = http.createServer((req,res)=> {
  if(req.method === 'GET' && req.url === '/'){
    fs.readFile('./doc/index.html', (err, data)=> {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, './mod/contentType.js');
        res.end(data);
      };
    });  
  } else if (req.method=== 'POST' && req.url === '/doc/login'){
    let body ='';
    
    req.on('data', (chunk) =>{
      body = body + chunk.toString();
    })
    req.on('end', () => {
      const parsedBody = queryString.parse(body);
      const {username, password} = parsedBody;

      // check 
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, parsedBody);
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, username);
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, password);

    })
    fs.readFile('./doc/index.html', (err, data)=> {
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