var hour=0,min=0,sec=0;
var displayHour,displayMinutes,displaySeconds;
var timeout=null;
var check="Stop"
function timer(){
    sec++;
    if(sec/60==1){
        min++;
        sec=0
    }
    if(min/60==1){
        hour++;
        min=0;
        sec=0
    }
    if(sec<10){
        displaySeconds="0"+sec.toString();
    }
    else{
        displaySeconds=sec.toString();
    }
    if(min<10){
        displayMinutes="0"+min.toString();
    }
    else{
        displayMinutes=min.toString();
    }
    if(hour<10){
        displayHour="0"+hour.toString();
    }
    else{
        displayHour=hour.toString();
    }
    document.getElementById('displayHour').innerHTML=displayHour+":";
    document.getElementById('displayMinutes').innerHTML=displayMinutes+":";
    document.getElementById('displaySeconds').innerHTML=displaySeconds;
}
function Start(){
    if(check=="Stop"){
        timeout=window.setInterval(timer,1000)
        document.getElementById('Start').innerHTML="Stop"
        check="Start"
    }
    else{
        window.clearInterval(timeout)
        document.getElementById('Start').innerHTML="Start"
        check="Stop"
    }
}
function Reset(){
    window.clearInterval(timeout)
    min=0;
    sec=0;
    hour=0;
    document.getElementById('displayHour').innerHTML="00:"
    document.getElementById('displayMinutes').innerHTML="00:"
    document.getElementById('displaySeconds').innerHTML="00"
    document.getElementById('Start').innerHTML="Start"
}