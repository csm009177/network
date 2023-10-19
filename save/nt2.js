const http = require('http');
const server = http.createServer((req, res) => {
  console.log('url로 최초 접속하는 트랜잭션 확인하기');
  console.log(req.url);
  console.log('url로 최초 접속하는 요청 유형 확인하기');
  console.log(req.method);
});

server.listen(3000, () => {
  console.log(`server runnig : http://localhost:3000/`);
})