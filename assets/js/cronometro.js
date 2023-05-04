let minutesEl = document.querySelector('.minutes');
let secondsEl = document.querySelector('.seconds');
let millisecondsEl = document.querySelector('.milliseconds');
let startBtn = document.querySelector('.start-btn');
let pauseBtn = document.querySelector('.pause-btn');
let resumeBtn = document.querySelector('.resume-btn');
let resetBtn = document.querySelector('.reset-btn');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let paused = false;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    interval = setInterval(() => {
        if (!paused) {
            milliseconds += 10;
            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }
    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}


function pauseTimer() {
    paused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block"
}

function resumeTimer() {
    paused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    paused = false;
    startBtn.style.display = "block";
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "none";

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    millisecondsEl.textContent = "000";
    secondsEl.textContent = "00";
    minutesEl.textContent = "00";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}