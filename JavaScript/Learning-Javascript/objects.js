var person={
  name:"saketh",
  age:25,
  hasDriverslicence:true,
  DOB:"10-06-2002",
  address:{
    city:"Gajwel",
    postalcode:"502278",
    country:'India'
  }
};
//console.log(JSON.stringify(person.name));
//object.values is a function takes as parameter
console.log(Object.values(person.address));