// const body = document.querySelector('body')
// const counterText = document.createElement('h1')
// let counter = '10'
// // Create counter text 

// function addCounter() {    
//     counterText.classList.add('counter')
//     counterText.innerHTML = counter
//     body.append(counterText)
//     return counterText
// }

// // Decrease countdown number

// function countdownFunction() {
//     counter--
// }

// // Update countdown number 

// function initCounter() {
//     addCounter()
//     countdownFunction()
//     counterText.innerHTML = counter
// }


// initCounter()






const body = document.querySelector('body')
const div = document.querySelector("div")
let counterText = document.createElement("h1")
let counterTime = 10
const audio = new Audio("Audio/Final Fantasy IX OST - Game Over.MP3");
let flash = 1

function setCounter() {
    counterText.innerText = counterTime
    div.append(counterText)
}


document.getElementById("resetButton").addEventListener("click", resetCounter);


function decreaseCounter() {
    console.log("decrease counter: ", counterTime)
    if (counterTime > 0) {
        counterTime--
        counterText.innerHTML = counterTime
    } else {
        body.setAttribute("class", "backgroundSet")
        // div.setAttribute("class", "hide")
        // audio.play();
        const textIsFlashing = setInterval(flashingText, 100)
        stopCounter()
    }
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function restartElements() {
    counterTime = 10
    div.classList.remove("hide");
    body.classList.remove("backgroundSet")
    div.style.color= "white"
}

function resetCounter() {
    if (counterTime < 1) {
        restartElements()
        stopAudio()
    }
}

function stopCounter(){
    clearInterval(timeIsPassing)
}

// function flashingText() {
//     if (flash%2=== 0) {
//     div.setAttribute("class", "flashText")
//     flash++
// } else {
//     div.classList.remove("flashText");
//     flash++
// }
// }

setInterval(function() {
    if (counterTime <1) {
    div.style.color = (div.style.color === 'white' ? 'red' : 'white');
    }
}, 500);


setCounter()
let timeIsPassing = setInterval(decreaseCounter, 1000)

























