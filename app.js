const timer = document.getElementById('stopwatch');

let hr = 0;
let min = 0;
let sec = 0;
let flag = true;

function startTimer() {
    if (flag === true) {
        flag = false;

        if (flag === false) {
            sec = parseInt(sec);
            min = parseInt(min);
            hr = parseInt(hr);

            sec = sec + 1;

            if (sec === 60) {
                min = min + 1;
                sec = 0;
            }
            if (min === 60) {
                hr = hr + 1;
                min = 0;
                sec = 0;
            }

            timer.innerHTML = hr + ':' + min + ':' + sec;
            setTimeout("timerCycle()", 1000);
        }
    }
}
function stopTimer() {
    if (flag === false) {
        flag = true;
    }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    flag = true;
    hr = 0;
    sec = 0;
    min = 0;
}