let startButton = document.getElementById("startButton");
let word = document.getElementById("wordSpan");
let wordArray = ["JavaScript", "Array", "String", "HTML"];
let timer = document.getElementById("countdown");
let timeLeft = 0;
let selectedWord = "";
let splitWord = [];


// Keydown event
document.addEventListener('keydown', function (event) {

    console.log("keydwon function working");
    if (timeLeft === 0) {
        return;
    }
    // Access value of pressed key with key property
    word.style = "visibility: visible";
    let key = event.key.toLowerCase();

    // word.innerHTML = " _ " * splitWord.length;
    
    if (splitWord.includes(key)) {
        
    }

    

  
});


function countdown() {
    timeLeft = 180;

    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft + " seconds remaining."

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timer.textContent = "";
        }
    }, 1000);
}




startButton.addEventListener("click", startGame)
function startGame() {
    countdown();
    let i = Math.floor(Math.random() * wordArray.length);
    console.log(i);
    word.innerHTML = wordArray[i];
    selectedWord = wordArray[i];
    let splitWord = selectedWord.toLowerCase().split("");
    for (let j = 0; j < splitWord.length; j++)
    word.innerHTML = "";
    word.innerHTML = word.innerHTML + " _ ";

  
    console.log(splitWord);

  }
