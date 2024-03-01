const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, getComputerChoice());
    console.log(result);
  });
});

function getComputerChoice() {
  // Generate random integer between 0 and 2
  const randomInt = Math.floor(Math.random() * 3);
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[randomInt];
}

function playRound(playerSelection, computerSelection) {
  const playerChose = playerSelection.toLowerCase();
  const computerChose = computerSelection.toLowerCase();

  if (playerChose === computerChose) {
    return "tie";
  }

  if (playerChose === "rock") {
    return computerChose === "scissors" ? "win" : "lose";
  }

  if (playerChose === "paper") {
    return computerChose === "rock" ? "win" : "lose";
  }

  if (playerChose === "scissors") {
    return computerChose === "paper" ? "win" : "lose";
  }
}
