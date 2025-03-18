function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanChoice === computerChoice) {
      result = "It's a tie!";
  } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
  ) {
      result = "You win this round!";
      humanScore++;
  } else {
      result = "Computer wins this round!";
      computerScore++;
  }

  updateScore(result, humanChoice, computerChoice);
}

function updateScore(result, humanChoice, computerChoice) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
      <p>You chose: <strong>${humanChoice}</strong></p>
      <p>Computer chose: <strong>${computerChoice}</strong></p>
      <p>${result}</p>
      <p>Score - You: ${humanScore}, Computer: ${computerScore}</p>
  `;

  if (humanScore === 5) {
      resultsDiv.innerHTML += `<h2>🎉 Congratulations! You won the game! 🎉</h2>`;
      disableButtons();
  } else if (computerScore === 5) {
      resultsDiv.innerHTML += `<h2>💀 Computer wins the game! Try again! 💀</h2>`;
      disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll("button").forEach(button => {
      button.disabled = true;
  });
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
