function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, scissors");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`you chose: ${humanChoice}`);
  console.log(`computer chose ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("it's a tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("you win this round");
    humanScore++;
  } else {
    console.log("Computer win this round");
    computerScore++;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}\n`);
  }
  if (humanScore > computerScore) {
    console.log("You won the game");
  } else if (humanScore < computerScore) {
    console.log("Computer wins the game");
  } else {
    console.log("The game is tie");
  }
}

playGame();
