
function f1()
{
  document.getElementById("count").innerText--
  if (document.getElementById("count").innerText<0)
  {
    document.getElementById("count").style.color="red";
  }
  else if (document.getElementById("count").innerText == 0)
  {
    document.getElementById("count").style.color = "black"
  }
}
function f3() {
  document.getElementById("count").innerText++
  if (document.getElementById("count").innerText > 0) {
    document.getElementById("count").style.color = "green";
  }
  else if (document.getElementById("count").innerText == 0) {
    document.getElementById("count").style.color = "black"
  }
}
function f2() {
  document.getElementById("count").innerText=0
  document.getElementById("count").style.color="black"
    
  
  
}