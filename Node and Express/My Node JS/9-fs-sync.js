const fs = require('fs');
//can use const {readFileSync}

const first = fs.readFileSync('./content/first.txt', 'utf-8')
const second = fs.readFileSync('./content/second.txt', 'utf-8')
console.log(first, second);
fs.writeFileSync('./content/result.txt', `here is the result:${first},${second}`)
console.log(fs.readFileSync('./content/result.txt', 'utf-8'));