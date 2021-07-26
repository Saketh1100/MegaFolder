
const http = require('http');

//Using Event Emitter API
const server = http.createServer();
//here request is a specific event
server.on('request', (req, res) => {
  res.end('Welcome')
})

//how to know that our server have an event called request, we can check it in http events section of documentation

server.listen(5000);