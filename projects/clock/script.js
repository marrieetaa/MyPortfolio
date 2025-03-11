//--Stopwatch--
//Stopwatch object
const stopwatch = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    timer: null,
    running: false,
    startTimer() {
        if(!this.running) {
            this.running = true;
            this.timer = setInterval(() => this.updateTime(),10);
        }
    },
    stopTimer() {
        this.running = false;
        clearInterval(this.timer);
    },
    resetTimer() {
        this.running = false;
        clearInterval(this.timer);
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
        this.updateDisplay();
    },
    updateTime() {
        this.milliseconds += 10;
        if(this.milliseconds === 1000) {
            this.milliseconds = 0;
            this.seconds++;
        }
        if(this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if(this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }
        this.updateDisplay();
    },
    updateDisplay() {
      document.getElementById('stopwatch-hours').innerText = this.formatTime(this.hours);
      document.getElementById('stopwatch-minutes').innerText = this.formatTime(this.minutes);
      document.getElementById('stopwatch-seconds').innerText = this.formatTime(this.seconds);
      document.getElementById('stopwatch-milliseconds').innerText = this.formatTime(Math.floor(this.milliseconds / 10));
    },
    formatTime(time) {
        return String(time).padStart(2,'0'); 
    }
}

//Selecting the buttons
const stopwatchStartBtn = document.getElementById('stopwatch-start-btn');
const stopwatchStopBtn = document.getElementById('stopwatch-stop-btn');
const stopwatchResetBtn  = document.getElementById('stopwatch-reset-btn');

//Binding functions to the buttons
stopwatchStartBtn.addEventListener('click',() => stopwatch.startTimer());
stopwatchStopBtn.addEventListener('click',() => stopwatch.stopTimer());
stopwatchResetBtn.addEventListener('click',() => stopwatch.resetTimer());


//--Timer--
//
const timerStartBtn = document.getElementById('timer-start-btn');
const timerStopBtn = document.getElementById('timer-stop-btn');
const timerResetBtn = document.getElementById('timer-reset-btn');
//
const hourInput = document.getElementById('timer-hours');
const minutesInput = document.getElementById('timer-minutes');
const secondsInput = document.getElementById('timer-seconds');


