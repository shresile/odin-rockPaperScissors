
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


function getHumanChoice(){
    let num = Number(prompt("enter a num, 1 for \"rock\", 2 for \"paper\" or 3 for \"scissors\""));
    switch (num){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}



playGame();

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    let humanSelection = getHumanChoice();
    console.log(`user: ${humanSelection}`);
    let computerSelection = getComputerChoice();
    console.log(`computer: ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Round 1, your score is ${humanScore}, computer's score is ${computerScore}!`);

    humanSelection = getHumanChoice();
    console.log(`user: ${humanSelection}`);
    computerSelection = getComputerChoice();
    console.log(`computer: ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Round 2, your score is ${humanScore}, computer's score is ${computerScore}!`);

    humanSelection = getHumanChoice();
    console.log(`user: ${humanSelection}`);
    computerSelection = getComputerChoice();
    console.log(`computer: ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Round 3, your score is ${humanScore}, computer's score is ${computerScore}!`);

    humanSelection = getHumanChoice();
    console.log(`user: ${humanSelection}`);
    computerSelection = getComputerChoice();
    console.log(`computer: ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Round 4, your score is ${humanScore}, computer's score is ${computerScore}!`);

    humanSelection = getHumanChoice();
    console.log(`user: ${humanSelection}`);
    computerSelection = getComputerChoice();
    console.log(`computer: ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Round 5, your score is ${humanScore}, computer's score is ${computerScore}!`);

    console.log(`Final score: your score is ${humanScore}, computer's score is ${computerScore}!`);

    if (humanScore > computerScore){
        console.log("YOU WIN!");
    } else{
        console.log("COMPUTER WINS!");
    }



    function playRound(humanChoice,ComputerChoice){
        if (humanChoice ==ComputerChoice){
            const newHumanSelection = getHumanChoice();
            console.log(`new!user: ${newHumanSelection}`);
            const newComputerSelection = getComputerChoice();
            console.log(`new!computer: ${newComputerSelection}`);
            playRound(newHumanSelection, newComputerSelection);

        } else if (humanChoice == "rock" && ComputerChoice == "paper"){
            computerScore++;
            console.log("You lose! Paper beats Rock.");
        } else if (humanChoice == "rock" && ComputerChoice == "scissors"){
            humanScore++;
            console.log("You win! Rock beats Scissors.");
        } else if (humanChoice == "paper" && ComputerChoice == "scissors"){
            computerScore++;
            console.log("You lose! Scissors beats Paper.");
        } else if (humanChoice == "paper" && ComputerChoice == "rock"){
            humanScore++;
            console.log("You win! Paper beats Rock.");
        } else if (humanChoice == "scissors" && ComputerChoice == "rock"){
            computerScore++;
            console.log("You lose! Rock beats Scissors.");
        } else {
            humanScore++;
            console.log("You win! Scissors beats Paper.");
        } 
    }
}



