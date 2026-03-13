/* STAR SKY */

for(let i=0;i<150;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);

}


/* HEART FLOW */

function createHearts(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*20+10)+"px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),5000);

}

}


/* PAGE CHANGE */

function nextPage(page,msg){

alert(msg);

document.querySelector(".active").classList.remove("active");

document.getElementById("page"+page).classList.add("active");

}


/* YES FLOW */

function yesFlow(page){

createHearts();

setTimeout(()=>{

document.querySelector(".active").classList.remove("active");

document.getElementById("page"+page).classList.add("active");

},800);

}


/* RESIZE BUTTONS */

let yesSize=18;
let noSize=18;

function resizeButtons(){

yesSize+=6;
noSize-=2;

document.getElementById("yesBtn").style.fontSize=yesSize+"px";

document.getElementById("noBtn").style.fontSize=noSize+"px";

}


/* FINAL PAGE */

function yesFinal(){

createHearts();

setTimeout(()=>{

document.querySelector(".active").classList.remove("active");

document.getElementById("finalPage").classList.add("active");

},800);

}
