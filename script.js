
function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    switch (num){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
//initialize scores
let humanScore = 0;
let computerScore = 0;

let resultBoard = document.querySelector("#results");


//get a nodeList of buttons
const buttons = document.querySelectorAll("button");
//add event listeners, when one of the three buttons are clicked,
//playRound function with the correct playerSelection is called
buttons.forEach(button => {
    button.addEventListener("click",playRound);
});




function playRound(event){
    //get humanChoice from event property
    let humanChoice = event.target.textContent;
    console.log(`Player: ${humanChoice}`);
    let ComputerChoice = getComputerChoice();
    console.log(`Computer: ${ComputerChoice}`);

    if (humanScore == 5 ){
        resultBoard.innerText += `YOU WIN! Final score: your score is ${humanScore}, computer's score is ${computerScore}\n`;
    } else if (computerScore == 5) {
        resultBoard.innerText += `COMPUTER WINS! Final score: your score is ${humanScore}, computer's score is ${computerScore}\n`;
    } 

    

        if (humanChoice == ComputerChoice){            
            resultBoard.innerText += "Tie, once again!\n";
            console.log(humanScore);
        } else if (humanChoice == "rock" && ComputerChoice == "paper"){
            computerScore++;
            resultBoard.innerText +="You lose! Paper beats Rock.\n";
            console.log(humanScore);
        } else if (humanChoice == "rock" && ComputerChoice == "scissors"){
            humanScore++;
            resultBoard.innerText +="You win! Rock beats Scissors.\n";
            console.log(humanScore);
        } else if (humanChoice == "paper" && ComputerChoice == "scissors"){
            computerScore++;
            resultBoard.innerText +="You lose! Scissors beats Paper.\n";
            console.log(humanScore);
        } else if (humanChoice == "paper" && ComputerChoice == "rock"){
            humanScore++;
            resultBoard.innerText +="You win! Paper beats Rock.\n";
            console.log(humanScore);
        } else if (humanChoice == "scissors" && ComputerChoice == "rock"){
            computerScore++;
           resultBoard.innerText +="You lose! Rock beats Scissors.\n";
           console.log(humanScore);
        } else {
            humanScore++;
           resultBoard.innerText +="You win! Scissors beats Paper.\n";
           console.log(humanScore);
        } 
    }





