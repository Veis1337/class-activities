

let button = document.getElementById("playMe")

button.addEventListener("click", play);

let playerScore = 0;
let cpuScore = 0;

function play() {
    let userInput = window.prompt("Rock, Paper, or Scissors?");
        if (userInput === "Rock") {
            userInput = 1;
        } else if (userInput === "Paper") {
            userInput = 2;
        } else if (userInput === "Scissors") {
            userInput = 3;
        } else {
            alert("That is not a valid entry. Remember - Capitalization matters!");
        }
console.log(userInput);

    let cpuInput = Math.floor(Math.random() * 3 + 1);
console.log(cpuInput);

        if (cpuInput === 3 && userInput === 1) {
            alert("You lose! Cpu player chose Paper!");
            cpuScore++;
        } else if (cpuInput === 3 && userInput === 2) {
            alert ("You lose! Cpu player chose Scissors!");
            cpuScore++;
        } else if (cpuInput === 3 && userInput === 3) {
            alert ("You lose! Cpu player chose Rock!");
            cpuScore++;
        }

        if (cpuInput !== 3) {
            if (userInput === 1) {
                console.log("WINNER! Cpu chose Scissors");
                playerScore++;
            } else if (userInput === 2) {
                console.log("WINNER! Cpu chose Rock!");
                playerScore++;
            } else if (userInput === 3) {
                console.log("WINNER! Cpu chose Paper!");
                playerScore++;
            }
            
        }

console.log(playerScore + " is your score")
console.log(cpuScore + " is the cpu's score")








}

play();