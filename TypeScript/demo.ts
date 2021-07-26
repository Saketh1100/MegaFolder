//variables in TS
//const hello="World";//We are not allowed to change const so we have type not as string but as world
// let hello="world";//Its a string and it can be only changed to string
//Explicity declaration type is better
// let kitty:string="cat";
//TS transpile's everything in ES3 which can be supported in every browser
// const getFullName=(name:string,surname:string):string=>
// {
//   return name+" "+surname;
// }
// console.log(getFullName("hell","Boy"));
//safe to explicitly provide type and return type in function
//OBJECTS IN TS
// const user:{name:string,age:number}=
// {
//   name:"saketh",
//   age:20,
// };
// interface UserInterface{
//   name:string;
//   age?:number;
//   getMessage():string;
// }
// const user2:UserInterface=
// {
//   name:"Jack",
//   getMessage(){
//     return "hello"+name;
//   }
// };
// console.log(user2.getMessage());
// ANY/Never/void/unknown
// const ele=document.getElementById('foo');
// ele.addEventListener('blur',(event)=>{
//   const target = event.target as HTMLInputElement;
//   console.log(event.target.value);
// })
// console.log((ele.value)//this is wrong
//typescript doesn't know about HTML;
// interface UserInterface
// {
//   getFullName():string;
// }
// class User implements UserInterface
// {
//   protected firstName:string;
//   protected lastName:string;
//   readonly unChange:string;
//   static readonly maxAge=50;
//static are only available for class not in instances
//   constructor(firstName:string,lastName:string)
//   {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.unChange=firstName;
//   }
//   getFullName():string{
//     return this.firstName+' '+this.lastName;
//   }
// }
// class Admin extends User
// {
//     private editor:string;
//     constructor(firstName:string,lastName:string,editor:string)
//     {
//       super(firstName,lastName);
//       this.editor=editor;
//     }
// }
//can access all properties of User
// const user=new User("monster","dragon");
// console.log(user.getFullName());
// const admin=new Admin("saketh","hello","hi");
// console.log(admin.firstName);
//protected only will be available for children of this classes;
//Enum not available in JS 
//Hosting
//console.log(someString);
// var someString="hello"
// let someString="dfwr";
var saketh;
(function (saketh) {
    saketh[saketh["sai"] = 100] = "sai";
    saketh[saketh["hello"] = 101] = "hello";
})(saketh || (saketh = {}));
var x = saketh.sai;
console.log(x);
