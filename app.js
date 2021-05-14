const timer = document.getElementById('stopwatch');

let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;
let isRunning = false;

function startTime() {
    if (isRunning === false) {
        isRunning = true;
        cycle();
    }
}
function stopTime() {
    if (isRunning === true) {
        isRunning = false;
    }
}

function cycle() {
    if (isRunning === true) {
        milisec = parseInt(milisec)
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        milisec = milisec + 1;

        if(milisec === 9){
            sec = sec + 1;
            milisec = 0;
        }
        if (sec === 60) {
            min = min + 1;
            sec = 0;
        }
        if (min === 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if (sec < 10 || sec === 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min === 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr === 0) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ':' + min + ':' + sec + ':' + milisec;
        setTimeout("cycle()", 100);
    }
}

function resetTime() {
    timer.innerHTML = "00:00:00:0";
    isRunning = false;
    hr = 0;
    sec = 0;
    min = 0;
    milisec = 0;
}