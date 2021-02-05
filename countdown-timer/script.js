const daysLeft = document.getElementById('days');
const hoursLeft = document.getElementById('hours');
const minutesLeft = document.getElementById('mins');
const secondsLeft = document.getElementById('seconds'); 
 
 const newYear = "01 Jan 2022";

 function countdown(){
     const newYearDate = new Date(newYear);
     const currentDate = new Date();

     const totalseconds = ( newYearDate - currentDate) / 1000;
     
     const days = Math.floor (totalseconds / 3600 / 24);
     const hours = Math.floor(totalseconds/3600)%24;
     const minutes = Math.floor(totalseconds /60) % 60;
     const seconds = Math.floor(totalseconds) %60;

    daysLeft.innerHTML = formatTime(days) ;
    hoursLeft.innerHTML = formatTime(hours) ;
    minutesLeft.innerHTML = formatTime(minutes) ;
    secondsLeft.innerHTML = formatTime(seconds) ;

    
 }

 function formatTime(time){
     return time < 10 ? (`0${time}`) : time;
 }

 //initial Call
 countdown();
 setInterval(countdown,1000);

