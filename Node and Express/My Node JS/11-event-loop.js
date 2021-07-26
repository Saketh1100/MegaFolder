//readFile
const {
  readFile
} = require('fs');

console.log('starting first')

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(result);
  console.log('completed first');
})
console.log('starting next');

//setTimeout
console.log("first");
setTimeout(() => {
  console.log('second');
}, 0);
console.log("third");

//setInterval
setInterval(() => {
  console.log('hello World');
}, 2000);
console.log('saketh');

//http

const http = require('http');
const server = http.createServer((req, res) => {
  console.log('Request');
  res.end('Hello World');
})
server.listen(5000, () => {
  console.log('Server is listening on port:5000');
})