let now = new Date();
let hour = now.getHours();
let greet = "";

if(hour >= 5 && hour < 12){
  greet = "Good Morning ";
}else if(hour >= 12 && hour < 17){
  greet = "Good Afternoon ";
}else if(hour >= 17 && hour < 21){
  greet = "Good Evening ";
}else{
  greet = "Good Night ";
}

document.getElementById("wish").innerHTML = "<h2>" + greet + "</h2>";
alert(greet + "  Today is " + now.toDateString());

document.getElementById("colorBtn").onclick = function(){
  const colors = ["#ff4444","#33b679","#ffbb33","#9933cc","#0099cc"];
  const pick = colors[Math.floor(Math.random() * colors.length)];
  this.style.backgroundColor = pick;
};

function getValues(){
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  if(isNaN(n1) || isNaN(n2)){
    document.getElementById("result").innerText = " enter valid numbers!";
    return null;
  }
  return {n1, n2};
}

document.getElementById("btnAdd").onclick = function(){
  const v = getValues();
  if(v) document.getElementById("result").innerText = "Result: " + (v.n1 + v.n2);
};

document.getElementById("btnSub").onclick = function(){
  const v = getValues();
  if(v) document.getElementById("result").innerText = "Result: " + (v.n1 - v.n2);
};

document.getElementById("btnMul").onclick = function(){
  const v = getValues();
  if(v) document.getElementById("result").innerText = "Result: " + (v.n1 * v.n2);
};

document.getElementById("btnDiv").onclick = function(){
  const v = getValues();
  if(v)
    {
    if(v.n2 === 0){
      document.getElementById("result").innerText = " Cannot divide by zero";
    } 
    else
         {
      document.getElementById("result").innerText = "Result: " + (v.n1 / v.n2);
    }
  }
};