const path = require('path');
//Sep
console.log(path.sep);
//Join
const join = path.join('/context', 'subfolder', 'test.txt')
console.log(join);
//Base
const base = path.basename(join);
console.log(base);
//Absolute
const absolute = path.resolve(__filename);
console.log(absolute);