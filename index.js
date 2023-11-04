let timer = 10;
let score=0;
const getNewHit=()=>{
    let randomNum=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=randomNum;
    
}

const fun1 = () => {
  var clutter = "";
  for (var i = 1; i <= 114; i++) {
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
        }
    },1000)
}

fun1();
timerFun();
getNewHit();