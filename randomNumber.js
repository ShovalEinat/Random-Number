document.addEventListener('contextmenu', event => event.preventDefault());
randomNumber.style.visibility="hidden";
reSet.style.visibility="hidden";
topSecret.style.visibility="hidden";
endGame.style.visibility="hidden";
endGame2.style.visibility="hidden";
endGame3.style.visibility="hidden";
endGame4.style.visibility="hidden";
enterPassword.style.visibility="hidden";
typePassword.style.visibility="hidden";
passwordCheck.style.visibility="hidden";
clue.style.visibility="hidden";

var password1 = "NICE";
var password2 = "nice";

document.getElementById('passwordCheck').addEventListener('mousedown', passwordTest);

function passwordTest() {   
  
    if(document.getElementById("typePassword").value != password1 &&
    document.getElementById("typePassword").value != password2) {
        endGame4.style.visibility="visible";
        endGame.style.visibility="hidden";
        endGame2.style.visibility="hidden";
        endGame3.style.visibility="hidden";
        setTimeout(() => {
            const endGame4 = document.getElementById('endGame4');
    
            endGame4.style.visibility = 'hidden';
            
          }, 4000);
      document.getElementById('typePassword').value = "";
      return false;
    }
  
    if(document.getElementById("typePassword").value == password1 ||
    document.getElementById("typePassword").value == password2) {
    var audio = new Audio('congratulations.mp3');
    audio.play();
    enterPassword.style.visibility="hidden";
    typePassword.style.visibility="hidden";
    passwordCheck.style.visibility="hidden";
    clue.style.visibility="hidden";
    endGame.style.visibility="visible";
    endGame2.style.visibility="hidden";
    endGame3.style.visibility="hidden";
    endGame4.style.visibility="hidden";
    stopTimer()

    setTimeout(() => {
        const endGame = document.getElementById('endGame');

        endGame.style.visibility = 'hidden';
        
      }, 5000);
  }
}

document.getElementById("randomNumber").innerHTML =
Math.floor(Math.random() * 100) + 1;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById('Start').addEventListener('mousedown', setTheText);

function setTheText() {
    document.getElementById('randomNumber').style.visibility = "visible";
    document.getElementById('topSecret').style.visibility = "visible";
    document.getElementById('Press').style.visibility = "hidden";
    document.getElementById('reSet').style.visibility = "visible";
    startTimer()
}

document.getElementById("reSet").addEventListener("mouseover", hoverIsON);
document.getElementById("Start").addEventListener("mouseover", hoverIsON1);
document.getElementById("topSecret").addEventListener("mouseover", hoverIsON2);

function hoverIsON(pEvent) {
    if (pEvent.target.id == "reSet"){
        pEvent.target.style.cursor = "pointer";
    }
    
}

function hoverIsON1(pEvent) {
    if (pEvent.target.id == "Start"){
        pEvent.target.style.cursor = "pointer";
    }
    
}

function hoverIsON2(pEvent) {
    if (pEvent.target.id == "topSecret"){
        pEvent.target.style.cursor = "pointer";
    }
    
}

topSecret.addEventListener('click', addSecretText);

function addSecretText() {
    endGame2.style.visibility="visible";
    endGame3.style.visibility="hidden";
    endGame.style.visibility="hidden";
    endGame4.style.visibility="hidden";

    setTimeout(() => {
        const endGame2 = document.getElementById('endGame2');

        endGame2.style.visibility = 'hidden';
        
      }, 8000);
}

document.getElementById("topSecret").addEventListener("contextmenu", Story1);

function Story1() {
    endGame.style.visibility="hidden";
    endGame2.style.visibility="hidden";
    endGame3.style.visibility="visible";
    endGame4.style.visibility="hidden";

    setTimeout(() => {
        const endGame3 = document.getElementById('endGame3');

        endGame3.style.visibility = 'hidden';
        
      }, 8000);
}

document.getElementById("randomNumber").addEventListener("contextmenu", passwordStart);

function passwordStart() {
enterPassword.style.visibility="visible";
typePassword.style.visibility="visible";
passwordCheck.style.visibility="visible";
clue.style.visibility="visible";
endGame.style.visibility="hidden";
endGame2.style.visibility="hidden";
endGame3.style.visibility="hidden";
endGame4.style.visibility="hidden";
}

var gameTitle = document.getElementById("gameTitle");
var timeout;

gameTitle.addEventListener("mouseover", function() {
  timeout = setTimeout(overFor5s, 5000);
});

gameTitle.addEventListener("mouseout", function() {
  clearTimeout(timeout);
});

function overFor5s() {
  alert("Try right cliking 5 times on the 'Random Number'");
}


let startTime;
let timerInterval;

function startTimer() {
	startTime = Date.now();
	timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
	const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
	document.getElementById("timer").textContent = elapsedTime;
}

function stopTimer() {
	clearInterval(timerInterval);
}

function playVideo() {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

let count = 0;
document.getElementById("randomNumber").addEventListener("click", function() {
  count++;
  if (count === 5) {
    appendFunction();
    count = 0;
  }
});

function appendFunction() {
  playVideo();
}