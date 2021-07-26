var fname=["Saketh","Neha","Rajani","Hari"]
var job=["Web Devoloper","Unemployed","Teacher","Teacher"]
let str1 = "assage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent "
let str2 = "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
let str3 = "assage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
let str4 = "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"

var content=[str1,str2,str3,str4];
let position;
position=0;

function f1()
{
    if(position-1<0)
    {
      position = fname.length - 1;
    }
    else{
      position-=1;
    }
    document.getElementById("name").innerText = fname[position];
    document.getElementById("job").innerText=job[position];
    document.getElementById("content").innerText = content[position];
}
function f2() {
  
  
  if(position+1==fname.length){
    position=0;
  }
  else{
    position += 1
  }
  document.getElementById("name").innerText = fname[position];
  document.getElementById("job").innerText = job[position];
  document.getElementById("content").innerText = content[position];
  
}
function f3()
{
  let l=fname.length;
  position=Math.floor(Math.random() * l);
  document.getElementById("name").innerText = fname[position];
  document.getElementById("job").innerText = job[position];
  document.getElementById("content").innerText = content[position];

}