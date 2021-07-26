//only works on arrays
//Map
//Transformation f array
var map=[1,2,3,4,5].map((n)=>{
  return n*10;
})
console.log(map);


//filter
//we only get back number that satisfy the condition
var filter=[1,2,3,4,101].filter((n)=>{
  return n>100;
})
console.log(filter);

//reduce
var reduce=[1,2,30,4,100].reduce((acc,curr)=>
{
  return acc+curr;
},10)
console.log(reduce);
