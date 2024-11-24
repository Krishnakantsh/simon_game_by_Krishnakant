let gameArr =[];

let userArr = [];

let level =0;

let startgame = false;

let btns = ['btn1', 'btn2', 'btn3', 'btn4'];


var p = document.querySelector('p');



document.addEventListener("keypress", function(){
  if( startgame == false){
    console.log("game start ");
    startgame = true;
    p.innerText="Game Starting..... ";
     p.style.color='black'
    setTimeout(function(){
       levelup()
    },2000);
  }
})


function btnflash(btn){

  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  }, 200)
  
}



function userFlash(btn){

  btn.classList.add("userFlash");
  setTimeout(function(){
    btn.classList.remove("userFlash");
  }, 200)
  
}



function levelup(){

  userArr = [];

  level++;
  p.style.color='black'
  p.innerText=`Level : ${level}`
  
  let randIndex = Math.floor(Math.random()*3);
  let rndColor = btns[randIndex];

  let randBtn =document.querySelector(`.${rndColor}`);
  gameArr.push(rndColor);
  console.log(gameArr);
  btnflash(randBtn);
}







function checkSequence(idx){
 
  if(userArr[idx] === gameArr[idx]){
      if( userArr.length === gameArr.length){
        setTimeout(levelup , 1000);
      }
  }else{
    const audio = new Audio('windows-error-sound-effect-35894.mp3');
    audio.play();
    p.innerText="Game over !! Please press any key to restart game ....";
    p.style.color="red";
    reset();
  }
   console.log(`current level of game : ${level}`);
}


function btnPress(){
  
  let btn = this;
  userFlash(btn);

  usercolor = btn.getAttribute("id");
  userArr.push(usercolor);
  console.log(userArr);

  checkSequence(userArr.length-1);

}



// access all btn 

let allBtns = document.querySelectorAll(".btn")


for( btn of allBtns ){

  btn.addEventListener("click", btnPress);

}


// reset game 

function reset(){
  level = 0;
  userArr = [];
  gameArr = [];
  startgame = false;
}


let flag = true;

function showHideInstuctions(){
  
  let left = document.querySelector(".left");
  let rightOuter = document.querySelector(".rightOuter");

  if( flag === true){
    left.style.width="70vw";
    rightOuter.style.display="flex";
    flag = false;
  }
  else{
    left.style.width="100%";
    rightOuter.style.display="none";
    flag=true;
  }

}