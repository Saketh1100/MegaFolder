let ans;
getQues();

async function getQues() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.text();
  const arr = await JSON.parse(data);
  console.log(arr);
  document.getElementById("question").innerHTML = arr.setup;
  ans=arr.punchline;

}

function f1(){
   document.getElementById("answer").innerHTML = ans;
}
function f2()
{
  getQues();
  document.getElementById("answer").innerHTML = "";

}