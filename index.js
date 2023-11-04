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
fun1();
 let timer = 3;
const timerFun=()=>{
   
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerBox").innerHTML=timer;
        }
        
    },1000)
}
timerFun();