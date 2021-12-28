/*
    Btns:       start/stop
                reset
                lap
    displays:   current total time (mm:ss:cs)
                current lap time (mm:ss:cs)
                laps
                    -- lap counter
                    -- lap time

*/

//select display elements

const lapTimeDisp = document.querySelector('.lap-time');
const totalTimeDisp = document.querySelector('.total-time');

//select button elements

const startStopBtn = document.querySelector('.start-stop-btn');
const lapBtn = document.querySelector('.lap-btn');
const resetBtn = document.querySelector('.reset-btn');

//select lap section

const lapSection = document.querySelector('.laps');

// format time

let counter = 0;

function formatTime(counter) {
    let minutes = Math.floor(counter / 6000);
    let seconds = Math.floor((counter - (minutes * 600)) / 100);
    let centiSeconds = counter % 100;

    if(minutes < 10) {minutes = '0' + minutes};
    if(seconds < 10) {seconds = '0' + seconds};
    if(centiSeconds < 10) {centiSeconds = '0' + centiSeconds};


    return `${minutes}:${seconds}.${centiSeconds}`;
}

// start/stop functions

let timerInterval = null;

function startTimer() {
    timerInterval = setInterval(() => {
        totalTimeDisp.textContent = formatTime(counter++);
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// button click event listeners

startStopBtn.addEventListener('click', () => {
    if(timerInterval) {
        stopTimer();
    } else {
        startTimer();
    }
});

lapBtn.addEventListener('click', () => {
    console.log("Lap button clicked!");
})

resetBtn.addEventListener('click', () => {
    console.log("Reset button clicked!");
})