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

for (let i = 1; i >= 5; i++) {
  console.log(i);
}

function playGame() {
  console.log("playing game");
  let playerScore = 0;
  let computerScore = 0;

  const textMap = {
    win: "You win!",
    tie: "It's a tie!",
    lose: "You lose!",
  };

  for (let i = 1; i <= 5; i++) {
    const userChose = prompt(`[Round ${i}] Rock, Paper, or Scissors?`);
    const computerChose = getComputerChoice();
    console.log({ userChose, computerChose });
    const roundResult = playRound(userChose, computerChose);

    if (roundResult === "win") {
      playerScore++;
    }
    if (roundResult === "lose") {
      computerScore++;
    }

    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
  }

  let gameResult;
  if (playerScore > computerScore) {
    gameResult = "win";
  } else if (playerScore === computerScore) {
    gameResult = "tie";
  } else {
    gameResult = "lose";
  }

  return alert(textMap[gameResult]);
}
playGame();
