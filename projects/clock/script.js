//--Stopwatch--
//Initial variables
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

//Start timer
function startTimer() {
    if(!running){
        running = true;

        timer = setInterval(() => {
        milliseconds += 10;

        if(milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
        }
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        
  },10)
 }
}

const start = document.getElementById('start');
start.addEventListener('click',startTimer);