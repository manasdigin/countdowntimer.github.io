const days=document.getElementById('days')
const hours=document.getElementById('hours')
const minutes=document.getElementById('minutes')
const seconds=document.getElementById('seconds')


function updateTime(){
const currentyear=new Date().getFullYear()

const newYear=new Date(`january 1 ${currentyear+1} 00:00:00`)  //concordination

const currentDate=new Date()

var diff=newYear-currentDate;

const d=Math.floor(diff/1000/60/60/24)
const h=Math.floor((diff/1000/60/60)%24)
const m=Math.floor((diff/1000/60)%60)
const s=Math.floor((diff/1000)%60)
days.innerHTML=d<10?"0"+d:d
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s
}
setInterval(updateTime,1000)

// 1000ms=1s;
// 60s=1m;
