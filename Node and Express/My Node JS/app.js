const { readFileSync, createReadStream } = require('fs');
const http = require('http');
const text = './content/big.txt'
const server = http.createServer((req, res) => {
    //const txt=readFileSync(text,'utf-8')
    const txt=createReadStream(text);
    txt.on('open',()=>{
      txt.pipe(res)
    })

})
server.listen(5000);