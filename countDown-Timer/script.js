const  newYear = '1 January 2021';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const diff = newYearDate-currentDate;
    const seconds = Math.floor(diff/1000);
    const minute = Math.floor(seconds/60);
    const hours = Math.floor(minute/60);
    const days = Math.floor(hours/24);
    daysEl.innerHTML=days;
    minutesEl.innerHTML=DateFormat(minute%60);
    hoursEl.innerHTML=DateFormat(hours%24);
    secondsEl.innerHTML=DateFormat(seconds%60);
}


function DateFormat(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown,1000);