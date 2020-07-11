var minute=0;
var second=0;
var millisec=0;
var interval;
var m=document.getElementById("min")
var s=document.getElementById("sec")
var ms=document.getElementById("msec")

function timer(){
    millisec++;
ms.innerHTML=millisec;
if(millisec>=100){
second++;
s.innerHTML=second;
millisec=0;
}
else if(second>=3){
minute++;
m.innerHTML=minute;
second=0;
}
}

function start(){
interval=setInterval(timer,10)
button.disabled = true

}
function stop(){
    button.disabled = false
    clearInterval(interval);
}
function reset(){
    button.disabled = false
    millisec=0
    second=0
    minute=0
    ms.innerHTML=millisec
    s.innerHTML=second
    m.innerHTML=minute
stop();
}