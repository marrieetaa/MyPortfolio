//--Stopwatch--
//Stopwatch object
const stopwatch = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    timer: null,
    running: false
}

//Start Stopwatch
function startTimer() {
    if(!stopwatch.running){
        stopwatch.running = true;

        stopwatch.timer = setInterval(() => {
            stopwatch.milliseconds += 10;

        if(stopwatch.milliseconds === 1000) {
            stopwatch.milliseconds = 0;
            stopwatch.seconds++;
        }
        if(stopwatch.seconds === 60) {
            stopwatch.seconds = 0;
            stopwatch.minutes++;
        }
        if(stopwatch.minutes === 60) {
            stopwatch.minutes = 0;
            stopwatch.hours++;
        }
        updateDisplay();
        
  },10)
 }
}

//Stop Stopwatch
function stopTimer() {
    stopwatch.running = false;
    clearInterval(stopwatch.timer);
}

//Reset Stopwatch
function resetTimer() {
    stopwatch.running = false;
   clearInterval(stopwatch.timer);
   stopwatch.hours = 0;
   stopwatch.minutes = 0;
   stopwatch.seconds = 0; 
   stopwatch.milliseconds = 0;
   updateDisplay();
}

//Update the time on screen
function updateDisplay(){
   document.getElementById('hours').innerText = String(stopwatch.hours).padStart(2,'0'); //00 format
   document.getElementById('minutes').innerText = String(stopwatch.minutes).padStart(2,'0');
   document.getElementById('seconds').innerText = String(stopwatch.seconds).padStart(2,'0');
   document.getElementById('milliseconds').innerText = String(Math.floor(stopwatch.milliseconds / 10)).padStart(2,'0');
}

const start = document.getElementById('start-btn');
start.addEventListener('click',startTimer);
const stop = document.getElementById('stop-btn');
stop.addEventListener('click',stopTimer);
const reset  = document.getElementById('reset-btn');
reset.addEventListener('click',resetTimer);