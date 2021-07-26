
const people=[
  {
    name:'bob',
    age:20,
    position:'developer',
  },
  {
    name: 'pop',
    age: 60,
    position: 'Designer',
  },
  {
    name: 'cop',
    age: 70,
    position: 'Boss',
  },

]
function sak(people)
{
  return people.age*2;
}
const ages = people.map(sak);
console.log(ages);


