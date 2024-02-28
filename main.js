function getComputerChoice() {
  // Generate random integer between 0 and 2
  const randomInt = Math.floor(Math.random() * 3);
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[randomInt];
}

function playRound(playerSelection, computerSelection) {
  const playerChose = playerSelection.toLowerCase();
  const computerChose = computerSelection.toLowerCase();

  const textMap = {
    win: `You win! ${playerChose} beats ${computerChose}`,
    tie: "It's a tie!",
    lose: `You lose! ${computerChose} beats ${playerChose}`,
  };

  if (playerChose === computerChose) {
    return textMap.tie;
  }

  if (playerChose === "rock") {
    return computerChose === "scissors" ? textMap.win : textMap.lose;
  }

  if (playerChose === "paper") {
    return computerChose === "rock" ? textMap.win : textMap.lose;
  }

  if (playerChose === "scissors") {
    return computerChose === "paper" ? textMap.win : textMap.lose;
  }
}

console.log(playRound("scissors", getComputerChoice()));
