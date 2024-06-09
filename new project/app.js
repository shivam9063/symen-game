 let gameSeq = [];
 let userSeq = [];

 let btn = ["yello", "red", "purple", "blue"]; 

 let started = false;
 let level = 0;

 let h2 = document.querySelector("h2");

 document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("game started"); 
        started = true; 

        levelUp();
    } 
 });

 function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
 }

 function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 1000);
 }

 function levelUp() {
    level++;
    userSeq = [];
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btn[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
   //  console.log(randIdx);
   //  console.log(randColor);
   //  console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
 }
 function checkAns() {
   // console.log("cur level : ", level);
   let idx = level - 1;

   if(userSeq[idx] === gameSeq[idx]){
      if(userSeq.length == gameSeq[idx]) {
         setTimeout(levelUp, 1000);
      }
   }
   else {
      h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function () {
         document.querySelector("body").style.backgroundColor = "white";
      }, 150);
      reset();
   }
 }

 function btnPress() {
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }
function reset() {
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}