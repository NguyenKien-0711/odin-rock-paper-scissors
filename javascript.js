window.addEventListener("DOMContentLoaded", () => {
    // all your current JS code goes inside here
    const startBtn = document.querySelector(".start-btn");
    const startBtnSection = document.querySelector(".start-btn-section");
    const item = document.querySelectorAll(".item");
    const rock = document.querySelector(".rock.item");
    const paper = document.querySelector(".paper.item");
    const scissors = document.querySelector(".scissors.item");
    const info = document.querySelectorAll(".info");
    let playerChoice = document.querySelector(".player-choice");
    let playerScore = document.querySelector(".player-score");
    let compChoice = document.querySelector(".computer-choice");
    let compScore = document.querySelector(".computer-score");

    let getComputerChoice = () => {
        let choice = ["rock", "paper", "scissors"];
        let randomIndex = Math.floor(Math.random() * 3);
        return choice[randomIndex];
    }
    let endGame = (humanScore, computerScore, message) => {
        for (let i of item) {
            i.style.display = "none";
        };
        // message.textContent = "Complete!"
        let resultBtn = document.createElement("div");
        resultBtn.style.cssText = `
                background-color: rgba(117, 114, 114, 0.668);
                font-family: 'Jersey 20';
                border: 3px solid white;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;
                font-size: 16px;
                width: 100px;
                padding: 10px 15px;
            `;
        resultBtn.addEventListener("mouseover", () => {
            resultBtn.style.backgroundColor = "red";
            resultBtn.style.borderColor = "black";
            resultBtn.style.color = "black";
            resultBtn.style.cursor = "pointer";
        })
        resultBtn.addEventListener("mouseout", () => {
            resultBtn.style.backgroundColor = "";
            resultBtn.style.borderColor = "white";
            resultBtn.style.color = "white";
            resultBtn.style.cursor = "";
        });

        startBtnSection.append(resultBtn);
        resultBtn.textContent = "Result";
        resultBtn.addEventListener("click", () => {
            message.remove();
            resultBtn.style.display = "none";
            let result = document.createElement("div");
            startBtnSection.append(result);
            result.style.cssText = "font-family: 'Jersey 20'; padding: 16px; text-align: center; font-size: 48px; color: rgba(213, 31, 31, 1)"
            if (humanScore > computerScore) result.textContent = "Congrats! You are winner";
            else if (humanScore < computerScore) result.textContent = "Oh no! You are lose";
        });
    }
    let playGame = () => {
        let humanScore = 0;
        let computerScore = 0;
        let message = document.createElement("div");
        startBtnSection.append(message);
        message.style.cssText =
            `font-family: 'Jersey 20';
            padding: 16px; 
            text-align: center; 
            font-size: 48px; 
            color: rgba(213, 31, 31, 1)`;
        startBtn.style.display = "none";
        for (i of item) {
            i.style.display = "block";
        }
        for (i of info) {
            i.style.display = "flex";
        }
        let playRound = (humanChoice) => {

            let computerChoice = getComputerChoice();
            if (humanChoice === "rock") {
                playerChoice.textContent = "Choice: Rock";
                if (computerChoice === "scissors") {
                    humanScore++;
                    message.textContent = "You win! Rock beats Scissors";
                    compChoice.textContent = "Choice: Scissors";
                }
                else if (computerChoice === "paper") {
                    computerScore++;
                    message.textContent = "You lose! Paper beats Rock";
                    compChoice.textContent = "Choice: Paper";
                }
                else if (computerChoice === "rock") {
                    message.textContent = "Tie!";
                    compChoice.textContent = "Choice: Rock";
                }
                playerScore.textContent = `Score: ${humanScore}`;
                compScore.textContent = `Score: ${computerScore};`
            }
            else if (humanChoice === "paper") {
                playerChoice.textContent = "Choice: Paper";
                if (computerChoice === "scissors") {
                    computerScore++;
                    message.textContent = "You lose! Scissors beats Paper";
                    compChoice.textContent = "Choice: Scissors";
                }
                else if (computerChoice === "rock") {
                    humanScore++;
                    message.textContent = "You win! Paper beats Rock";
                    compChoice.textContent = "Choice: Rock";
                }
                else if (computerChoice === "paper") {
                    message.textContent = "Tie!";
                    compChoice.textContent = "Choice: Paper";
                }
                playerScore.textContent = `Score: ${humanScore}`;
                compScore.textContent = `Score: ${computerScore};`
            }
            else if (humanChoice === "scissors") {
                playerChoice.textContent = "Choice: Scissors";
                if (computerChoice === "paper") {
                    humanScore++;
                    message.textContent = "You win! Scissors beat Paper";
                    compChoice.textContent = "Choice: Paper";
                }
                else if (computerChoice === "rock") {
                    computerScore++;
                    message.textContent = "You lose! Rock beat Scissors";
                    compChoice.textContent = "Choice: Rock";
                }
                else if (computerChoice === "scissors") {
                    message.textContent = "Tie!";
                    compChoice.textContent = "Choice: Scissors";
                }
                playerScore.textContent = `Score: ${humanScore}`;
                compScore.textContent = `Score: ${computerScore};`
            }
            if (humanScore === 5 || computerScore === 5) {
                endGame(humanScore, computerScore, message);

            }
        }

        rock.addEventListener("click", () => {
            playRound("rock");

        });
        paper.addEventListener("click", () => {
            playRound("paper");

        });
        scissors.addEventListener("click", () => {
            playRound("scissors");

        });
    }
    startBtn.addEventListener("click", () => {
        playGame();
    });
});
