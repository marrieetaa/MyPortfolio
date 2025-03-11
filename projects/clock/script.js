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
        updateDisplay();
        
  },10)
 }
}

function updateDisplay(){
   document.getElementById('hours').innerText = String(hours).padStart(2,'0'); //00 format
   document.getElementById('minutes').innerText = String(minutes).padStart(2,'0');
   document.getElementById('seconds').innerText = String(seconds).padStart(2,'0');
   document.getElementById('milliseconds').innerText = String(Math.floor(milliseconds / 10)).padStart(2,'0');
}

const start = document.getElementById('start-btn');
start.addEventListener('click',startTimer);