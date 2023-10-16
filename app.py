from http.server import BaseHTTPRequestHandler, HTTPServer

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
  
  def do_GET(self):
    print('url로 최초 접속하는 트랜잭션 확인하기')
    print(self.path)
    print('url로 최초 접속하는 요청 유형 확인하기')
    print(self.command)

    self.send_response(200)
    self.end_headers()
    self.wfile.write(b'hello,word!')

if __name__ == '__main__':
  httpd = HTTPServer(('localhost', 3000), SimpleHTTPRequestHandler)
  print('server running : http://localhost:3000/')
  httpd.server_forever()