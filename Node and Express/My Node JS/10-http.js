const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end();
  }
  if (req.url === '/about') {
    res.end('Hello my frnd');
  }
  res.end(
    '<h1>Oops!</h1>'
  )

})
server.listen(5000);