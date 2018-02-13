
const sessionTime = document.querySelector(".session");
const incSession = document.querySelector(".increaseSession");
const decSession = document.querySelector(".decreaseSession");

incSession.addEventListener('click',changeSession);
decSession.addEventListener('click', changeSession);

const breakTime = document.querySelector(".break");
const incBreak = document.querySelector(".increaseBreak");
const decBreak = document.querySelector(".decreaseBreak");

incBreak.addEventListener('click', changeBreak);
decBreak.addEventListener('click', changeBreak);

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let minutesSession = 25;

let minutesBreak = 5;

let session = true;

start.addEventListener('click',startTimer);
pause.addEventListener('click',pauseTimer);
reset.addEventListener('click',resetTimer);




function changeSession(e){
     if (e.target.getAttribute('data-value') === "+"){
         if(minutesSession<60){
             minutesSession++;
             sessionTime.innerHTML = `${minutesSession}`;
         }
     } else{
         if (minutesSession > 1) {
             minutesSession--;
             sessionTime.innerHTML = `${minutesSession}`;
         }
     }
     if(session){
         minutes.innerHTML = `${minutesSession}`;
     }
}

function changeBreak(e){
    
    if (e.target.getAttribute('data-value') === "+") {
        if (minutesBreak < 15) {
            minutesBreak++;
            breakTime.innerHTML = `${minutesBreak}`;
        }
    } else {
        if (minutesBreak > 1) {
            minutesBreak--;
            breakTime.innerHTML = `${minutesBreak}`;
        }
    }

    if (!session) {
        minutes.innerHTML = `${minutesBreak}`;
    }

}

function resetTimer(e){
    minutesSession = 25;
    minutesBreak = 5;
    sessionTime.innerHTML = `${minutesSession}`;
    breakTime.innerHTML = `${minutesBreak}`;
    session = true;
    minutes.innerHTML = `${minutesSession}`;
    seconds.innerHTML = '00';

}