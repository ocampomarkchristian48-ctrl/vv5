let bag=[
"red","red","red","red","red",
"blue","blue","blue",
"green","green"
]

let player=""

function startGame(){

player=document.getElementById("playerName").value

if(player===""){
alert("Enter your name")
return
}

document.getElementById("startScreen").classList.add("hidden")
document.getElementById("descScreen").classList.remove("hidden")

}

function startLevel1(){

document.getElementById("descScreen").classList.add("hidden")
document.getElementById("level1").classList.remove("hidden")

}

function pickBalls(){

let copy=[...bag]

let i1=Math.floor(Math.random()*copy.length)
let first=copy.splice(i1,1)[0]

let i2=Math.floor(Math.random()*copy.length)
let second=copy.splice(i2,1)[0]

let result=document.getElementById("resultBalls")

result.innerHTML=""

let b1=document.createElement("div")
b1.className="ball "+first

let b2=document.createElement("div")
b2.className="ball "+second

result.appendChild(b1)
result.appendChild(b2)

document.getElementById("nextBtn").classList.remove("hidden")

}

function startLevel2(){

document.getElementById("level1").classList.add("hidden")
document.getElementById("level2").classList.remove("hidden")

}

function checkLogic(){

let ana=document.getElementById("ana").value
let ben=document.getElementById("ben").value
let cara=document.getElementById("cara").value

let result=document.getElementById("logicResult")

if(
ana==="Teacher" &&
ben==="Engineer" &&
cara==="Doctor"
){

result.innerHTML="✅ Correct!"

setTimeout(()=>{

document.getElementById("level2").classList.add("hidden")
document.getElementById("endScreen").classList.remove("hidden")

document.getElementById("finalText").innerText=
"🏆 Congratulations "+player+"! You solved Mind Logic!"

},1500)

}else{

result.innerHTML="❌ Incorrect. Try again."

}

}
