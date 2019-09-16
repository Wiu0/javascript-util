
var t = 60;
function init(timeInMins)
{
    t = 60 * timeInMins;
    setInterval('timer()', 1000);
}


function timer(callBack)
{
   document.getElementById("ti").innerHTML = getCounter(--t);
   if(t == 0){
        clearInterval(funt);
        callBack;
        return;
    }
} 
function getCounter(secs){
    return mask(getHours(secs), '00') + ':' + 
    mask(getMins(secs), '00') + ':' + 
    mask(getSecs(secs), '00');
}

function getHours(secs){
    return parseInt(t / 3600, 10);
}
function getMins(secs){
    let min =  parseInt(t / 60, 10);
    return min > 59 ? 0 : min;
}
function getSecs(secs){
    return t % 60;
}

function mask(number, mask){
    var n = (number + '').length;
    var m = (mask + '').length;
    if(n < m){
        number = mask.substring(0, m - n) + '' + number;
    }
    return number;
}