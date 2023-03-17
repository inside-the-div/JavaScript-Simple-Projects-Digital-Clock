const todayDate = new Date();
var currentHour = Number(todayDate.getHours());
var currentMin = Number(todayDate.getMinutes());
var currentSec = Number(todayDate.getSeconds());
var outputHour = document.getElementById("outputHour");
var outputMinute = document.getElementById("outputMinute");
var outputSecond = document.getElementById("outputSecond");

outputHour.innerHTML = FormatTime(currentHour);
outputMinute.innerHTML = FormatTime(currentMin);
outputSecond.innerHTML = FormatTime(currentSec);  

var countId = setInterval(myClock,1000);
function myClock()
{  
    currentSec++;
    if(currentSec == 60)
    {
        currentSec = 0;
        currentMin++;
        if(currentMin == 60)
        {
            currentMin = 0;
            currentHour++;
        }
        outputMinute.innerHTML = FormatTime(currentMin);
    } 
    outputSecond.innerHTML = FormatTime(currentSec);
    if(currentHour == 24)
    {
        currentHour = 0;
    }
    outputHour.innerHTML = FormatTime(currentHour);
}

function FormatTime(time)
{
    var formatedTime
    if(time < 10)
    {
        formatedTime = "0" + time.toString();
    }
    else
    {
        formatedTime = time;
    }
    return formatedTime
}