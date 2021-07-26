const { names } = require("debug");

var nam=["saketh",10,true,{saketh:"name",10:"age"
,
}, undefined, null]
//looping through array
for(var i of nam)
{
  console.log(i);
}
// 2nd Method of looping through array
nam.forEach(element => {
  console.log(element);
});
//console.log(nam);