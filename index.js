console.log("working");
function time() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var ampm = document.getElementById("ampm");
var time = new Date();
var hrs = time.getHours();
var mins = time.getMinutes();
var sec = time.getSeconds();
var am_pm = "AM";
if(hrs==0){
    hrs=12; //11.59---00.00----12.00
}
if(hrs>12){
    hrs = hrs-12; //24 hrs format into 12 hours format 
am_pm = "PM"
}
if(hrs<10){
    hrs="0"+hrs;
}

if(mins<10){
    mins="0"+mins;
}

if(sec<10){
    sec="0"+sec;
}

hours.innerText = hrs
minutes.innerText = mins
seconds.innerText = sec
ampm.innerText = am_pm


}time();
var onesecond = 1000;
setInterval(time,onesecond)

function setTime(){
    var a = document.getElementById("wakeuptime").value
    var b = document.getElementById("lunchtime").value
    var c = document.getElementById("naptime").value
    var d = document.getElementById("nighttime").value

    var hourr = new Date().getHours();

    if (a == hourr) {


        document.getElementById("msg").innerText = "GOOD MORNING!! WAKE UP !!"
        document.getElementById("greeting").innerText = "grab some healthy breakfast!!!"
        document.getElementById("changeimg").src = "./morning.svg";


    }
    if (b == hourr) {


        document.getElementById("msg").innerText = "Good Afternoon !! Take some Sleep"
        document.getElementById("greeting").innerText = "let's have some lunch !!"
        document.getElementById("changeimg").src = "./lunchtime.svg";


    }
    if (c == hourr) {

        document.getElementById("msg").innerText = "Good Evening !!"
        document.getElementById("greeting").innerText = "Stop Yawning ,Get some Tea.. Its Just Evening! "
        document.getElementById("changeimg").src = "./nap.png";
    }

    
    if (d == hourr) {

        document.getElementById("msg").innerText = "Good Night!!"
        document.getElementById("greeting").innerText = "Close Your Eyes And Go To Sleep "
        document.getElementById("changeimg").src = "./night.png";
    }
}






