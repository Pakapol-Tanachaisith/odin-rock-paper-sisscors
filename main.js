const OPTIONS_MAP = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

function computerPick() {
  const options = Object.values(OPTIONS_MAP);
  return options[Math.floor(Math.random() * 3)];
}

function playerWin() {
  playerScoreDisplay.textContent = playerScore + 1;
  playerScore++;
}

function computerWin() {
  computerScoreDisplay.textContent = computerScore + 1;
  computerScore++;
}

function resetGame() {
  alert(playerScore > computerScore ? "Player Win!" : "Computer Win!");

  playerScore = 0;
  computerScore = 0;

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function playRound(playerChose) {
  const computerChose = computerPick();
  console.log({ playerChose, computerChose });

  // Tie
  if (playerChose === computerChose) return;

  if (playerChose === OPTIONS_MAP.ROCK) {
    if (computerChose === OPTIONS_MAP.SCISSORS) {
      playerWin();
    } else {
      computerWin();
    }
  }

  if (playerChose === OPTIONS_MAP.PAPER) {
    if (computerChose === OPTIONS_MAP.ROCK) {
      playerWin();
    } else {
      computerWin();
    }
  }

  if (playerChose === OPTIONS_MAP.SCISSORS) {
    if (computerChose === OPTIONS_MAP.PAPER) {
      playerWin();
    } else {
      computerWin();
    }
  }

  if (playerScore === 5 || computerScore === 5) {
    console.log({ playerScore, computerScore });
    resetGame();
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
