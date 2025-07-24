let getComputerChoice = () => {
    let computerChoice = Math.random() * 3;
    if (computerChoice === 0) return "rock";
    else if (computerChoice === 1) return "paper";
    else return "scissors";
}

let getHumanChoice = () => {
    let humanChoice;
    do {
        humanChoice = prompt("Choose one: rock, paper, scissors.");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock") return "rock";
        else if (humanChoice === "paper") return "paper";
        else if (humanChoice === "scissors") return "scissors";
        else console.log("Choose again!");
    } while (humanChoice !== "rock" || humanChoice !== "paper" || humanChoice !== "scissors");
}



let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let playRound = (humanChoice, computerChoice) => {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                humanScore++;
                console.log("Your humanChoice: ", humanChoice);
                console.log("Computer humanChoice: ", computerChoice);
                console.log("You win! Scissors beats Paper");
                console.log("Your score: ", humanScore);
                console.log("Computer score: ", computerScore);
            }
            else if (computerChoice === "rock") {
                computerScore++;
                console.log("Your humanChoice: ", humanChoice);
                console.log("Computer humanChoice: ", computerChoice);
                console.log("You lose! Scissors beats Paper");
                console.log("Your score: ", humanScore);
                console.log("Computer score: ", computerScore);
            }
            else if (computerChoice === "scissors") {
                console.log("Your humanChoice: ", humanChoice);
                console.log("Computer humanChoice: ", computerChoice);
                console.log("Tie!");
                console.log("Your score: ", humanScore);
                console.log("Computer score: ", computerScore);
            }
        }
        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore++;
                console.log("Your humanChoice: ", humanChoice);
                console.log("Computer humanChoice: ", computerChoice);
                console.log("You win! Rock beats Scissors");
                console.log("Your score: ", humanScore);
                console.log("Computer score: ", computerScore);
            }
            else if (computerChoice === "paper") {
                computerScore++;
                console.log("Your humanChoice: ", humanChoice);
                console.log("Computer humanChoice: ", computerChoice);
                console.log("You lose! Paper beats Rock");
                console.log("Your score: ", humanScore);
                console.log("Computer score: ", computerScore);
            }
            else if (computerChoice === "rock") {
                console.log("Your humanChoice: ", humanChoice);
                console.log("Computer humanChoice: ", computerChoice);
                console.log("Tie!");
                console.log("Your score: ", humanScore);
                console.log("Computer score: ", computerScore);
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                console.log("Your humanChoice: ", humanChoice);
                console.log("Computer humanChoice: ", computerChoice);
                console.log("You win! Paper beats Rock");
                console.log("Your score: ", humanScore);
                console.log("Computer score: ", computerScore);
            }
            else if (computerChoice === "scissors") {
                computerScore++;
                console.log("Your humanChoice: ", humanChoice);
                console.log("Computer humanChoice: ", computerChoice);
                console.log("You lose! Scissors beats Paper");
                console.log("Your score: ", humanScore);
                console.log("Computer score: ", computerScore);
            }
            else if (computerChoice === "paper") {
                console.log("Your humanChoice: ", humanChoice);
                console.log("Computer humanChoice: ", computerChoice);
                console.log("Tie!");
                console.log("Your score: ", humanScore);
                console.log("Computer score: ", computerScore);
            }
        }
    }
    const humanChoice = "";
    const computerChoice = "";
    for (let i = 0; i < 5; i++) {
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) console.log("You win, Congrats!");
    else if (humanScore < computerScore) console.log("You lose, Try again!");
    else console.log("Tie!");
}

playGame()