const todayDate = new Date();
var currentHour = Number(todayDate.getHours());
var currentMin = Number(todayDate.getMinutes());
var currentSec = Number(todayDate.getSeconds());
var outputHour = document.getElementById("outputHour");
var outputMin = document.getElementById("outputMin");
var outputSec = document.getElementById("outputSec");

outputHour.innerHTML = FormatTime(currentHour) + '<small>h</small>';;
outputMin.innerHTML = FormatTime(currentMin) + '<small>m</small>';;
outputSec.innerHTML = FormatTime(currentSec) + '<small>s</small>';  

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
        outputMin.innerHTML = FormatTime(currentMin) + '<small>m</small>';
    } 
    outputSec.innerHTML = FormatTime(currentSec) + '<small>s</small>'
    if(currentHour == 24)
    {
        currentHour = 0;
    }
    outputHour.innerHTML = FormatTime(currentHour) + '<small>h</small>';
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
        formatedTime = time.toString();
    }
    return formatedTime
}