function updateClock(){
    const now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let ampm=hours >=12?'pm':'am';

    //convert 24hr to 12 hr format
    hours=hours %12;
    hours=hours?hours:12; //if hours  is 0, set it to 12 (midnight or noon)

    // Add leading zeroes if hours, minutes, or seconds are less than 10

    
    minutes=minutes<10 ?'0'+ minutes:minutes;
    seconds=seconds<10 ?'0'+ seconds:seconds;

    //Display time in the format HH:MM:SS AM/PM
    const timeString=`${hours}:${minutes}<span class="smalltext">${ampm}</span>`;
    document.getElementById('clock').innerHTML=timeString;
}

//Call updateClock funtction every 1000ms (1 second)
setInterval(updateClock, 1000);

//Initialize clock when page loads
updateClock();