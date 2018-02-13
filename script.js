
// ----------- Session and break time ------------
const sessionTime = document.querySelector(".session");
const moreSession = document.querySelector(".increaseSession");
const lessSession = document.querySelector(".decreaseSession");

const breakTime = document.querySelector(".break");
const moreBreak = document.querySelector(".increaseBreak");
const lessBreak = document.querySelector(".decreaseBreak");
// -----------------------------------------------


// ----------- Control buttons and display -------
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const display = document.querySelector(".display");
// -----------------------------------------------

// ----------- Variables and states -------
let minutesSession = 25;
let minutesBreak = 5;
let seconds = 60;
let paused = false;
let session = true;
let id = 0;
let firstStart = true;
let savedSes;
let savedBreak;
// -----------------------------------------------

// ----------Event listeners---------------------
start.addEventListener('click',startTimer);
pause.addEventListener('click',pauseTimer);
reset.addEventListener('click',resetTimer);

moreSession.addEventListener('click', incSession);
lessSession.addEventListener('click', decSession);
moreBreak.addEventListener('click', incBreak);
lessBreak.addEventListener('click', decBreak);
// -----------------------------------------------

function startTimer(e){
    
    savedSes = minutesSession;
    savedBreak = minutesBreak;
    if (firstStart) {
        minutesSession--;
        minutesBreak--;
        firstStart = false;
    }
    id = setInterval(function () {
        if(session){
            decrementTime(minutesSession);
            displayTime(minutesSession, seconds);
            inSession(minutesSession);
        } else {
            decrementTime(minutesBreak);
            displayTime(minutesBreak, seconds);
            inBreak(minutesBreak);
        }
    }, 1000);
}

function pauseTimer(e){
    window.clearInterval(id);
}

function resetTimer(e) {
    minutesSession = 25;
    minutesBreak = 5;
    seconds = 60;
    session = true;
    paused = false;
    changeButtonLabels();
    window.clearInterval(id);
}


function decrementTime(minutes){
    seconds --;
    if (seconds == 0){
        minutes--;
        seconds = 5;
        if(minutesSession == 0 ){
            session = !session;
        }
    }
}

function inBreak(minutes){
    console.log('inside inBreak');
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);
    if (minutes == 0 && seconds == 0) {
        minutesBreak = savedBreak;
        seconds = 60;
        session = !session;
    }
}

function inSession(minutes){
    if(minutes == 0 && seconds == 0){
        minutesSession = savedSes;
        seconds = 60;
        session = !session;
    }
}

function convertToString(num){
    if (num < 10) {
        num = '0'+num;
    }
    return num;
}

function displayTime(min,sec){
    display.innerHTML = `${convertToString(min)} : ${convertToString(sec)}`;
}

//----------- Functions for updating buttons and labels------
function changeButtonLabels(){
    sessionTime.innerHTML = convertToString(minutesSession);
    breakTime.innerHTML = convertToString(minutesBreak);
    displayTime(minutesSession,0);
}

function decSession(e){
    if (minutesSession > 1) minutesSession--;
    changeButtonLabels()
};
function incSession (e){
    if (minutesSession < 60) minutesSession++;
    changeButtonLabels()
};
function decBreak(e) {
    if (minutesBreak > 1) minutesBreak--;
    changeButtonLabels()
    
};
function incBreak(e) {
    if (minutesBreak < 60) minutesBreak++;
    changeButtonLabels()
};
//------------------------------------------------------------------










