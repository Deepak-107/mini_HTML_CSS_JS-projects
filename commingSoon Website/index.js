const CountDownDate = new Date("jan 1, 2025 00:00:00").getTime();
const x = setInterval(()=>{
   const now = new Date().getTime();
   const Distance = CountDownDate - now
   let days = Math.floor(Distance/(1000*60*60*24));
   let hours = Math.floor(Distance%(1000*60*60*24) / (1000*60*60));
   let minutes = Math.floor(Distance%(1000*60*60)/(1000*60));
   let seconds = Math.floor(Distance%(1000*60)/1000);
   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;
   
    if(Distance< 0){
       clearInterval(x)
   document.getElementById("days").innerHTML = "00";
   document.getElementById("hours").innerHTML = "00";
   document.getElementById("minutes").innerHTML = "00";
   document.getElementById("seconds").innerHTML = "00";
    }
  },1000)