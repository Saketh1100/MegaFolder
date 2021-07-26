//way 1
// function add(a,b)
// {
//     return a+b;
// }

const { range } = require("rxjs/observable/range");

//way 2
const add=(a,b)=>{
  for(var i in range(a,b))
  {
    console.log(i);
  }
}
add(2,10);
