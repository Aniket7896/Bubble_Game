let timer = 60;
let score=0;
let randomNum=0;

let increaseScore=()=>{
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}
const getNewHit=()=>{
     randomNum=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=randomNum;
    
}

const fun1 = () => {
  var clutter = "";
  for (var i = 1; i <= 102; i++) {
    let randomNum=Math.floor(Math.random()*10);
    clutter += ` <div class="bubble">
           ${randomNum}
          </div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
};

const timerFun=()=>{
   
    var timerVal=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerBox").innerHTML=timer;
        }
        else{
            clearInterval(timerVal);
             document.querySelector("#hitVal").textContent = 0;
            document.querySelector(".pbtm").innerHTML=`<h1>Game Over</h1>`
        }
    },1000)
}

document.querySelector("#bubbleVal").addEventListener("click",function(val){
   let bubbleNum = Number(val.target.textContent);
   if( randomNum === bubbleNum){
    increaseScore();
    fun1();
    getNewHit();
   }
 
})
fun1();
getNewHit();
timerFun();

