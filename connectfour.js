gameBoard = [];
scoreCounter = { p1: 0, p2: 0 };
for (let x = 0; x <= 5; x++) {
  row = [];
  for (let j = 0; j <= 6; j++) {
    row.push(null);
  }
  gameBoard.push(row);
}
gameOver = false;

const winScreen = document.querySelector(".winOverlay");
const colTrigger = document.querySelectorAll(".column");
const p1WinCount = document.querySelector(".p1Score");
const p2WinCount = document.querySelector(".p2Score");
let currentPlayer = "player1";
colTrigger.forEach((column, index) =>
  column.addEventListener("click", function (e) {
    if (gameOver) return;
    for (let row = 5; row >= 0; row--) {
      if (gameBoard[row][index] === null) {
        gameBoard[row][index] = currentPlayer;

        const colourObj = document.querySelector(
          `.slot[data-row= "${row}"][data-column= "${index}"]`,
        );
        const placingPlayer = currentPlayer;
        if (placingPlayer === "player1") {
          colourObj.classList.add("redToken");
        } else {
          colourObj.classList.add("goldToken");
        }
        //Check horizontal right
        let horizfour = 1;
        let rightChecker = index + 1;

        while (
          rightChecker <= 6 &&
          gameBoard[row][rightChecker] === placingPlayer
        ) {
          horizfour++;
          rightChecker += 1;
        }

        //Check horizontal left
        let leftChecker = index - 1;
        while (
          leftChecker >= 0 &&
          gameBoard[row][leftChecker] === placingPlayer
        ) {
          horizfour++;
          leftChecker -= 1;
        }
        //Sum of tokens in a row
        if (horizfour >= 4) {
          gameOver = true;
          winnerScreen(placingPlayer);
          pointTally(placingPlayer);
        }

        //

        // Check top left to bottom right
        let diagfour = 1;
        let diagRow = row + 1;
        let diagCol = index + 1;

        while (
          diagRow <= 5 &&
          diagCol <= 6 &&
          gameBoard[diagRow][diagCol] === placingPlayer
        ) {
          diagfour++;
          diagRow++;
          diagCol++;
        }
        // Check bottom right to top left
        let diagUpRow = row - 1;
        let diagUpCol = index - 1;

        while (
          diagUpRow >= 0 &&
          diagUpCol >= 0 &&
          gameBoard[diagUpRow][diagUpCol] === placingPlayer
        ) {
          diagfour++;
          diagUpRow--;
          diagUpCol--;
        }
        if (diagfour >= 4) {
          console.log(`${placingPlayer} wins!`);
          gameOver = true;
          winnerScreen(placingPlayer);
          pointTally(placingPlayer);
        }
        //
        // Check down‑left
        let diagfour2 = 1;
        let diagRow2 = row + 1;
        let diagCol2 = index - 1;

        while (
          diagRow2 <= 5 &&
          diagCol2 >= 0 &&
          gameBoard[diagRow2][diagCol2] === placingPlayer
        ) {
          diagfour2++;
          diagRow2++;
          diagCol2--;
        }
        // Check up‑right
        let diagUpRow2 = row - 1;
        let diagUpCol2 = index + 1;

        while (
          diagUpRow2 >= 0 &&
          diagUpCol2 <= 6 &&
          gameBoard[diagUpRow2][diagUpCol2] === placingPlayer
        ) {
          diagfour2++;
          diagUpRow2--;
          diagUpCol2++;
        }
        if (diagfour2 >= 4) {
          console.log(`${placingPlayer} wins!`);
          gameOver = true;
          winnerScreen(placingPlayer);
          pointTally(placingPlayer);
        }

        //Vertical check
        let vertCheck = 1;
        let rowCheck = row + 1;
        // Check down
        while (rowCheck <= 5 && gameBoard[rowCheck][index] === placingPlayer) {
          rowCheck++;
          vertCheck++;
        }
        // Check up
        let uprowCheck = row - 1;
        while (
          uprowCheck >= 0 &&
          gameBoard[uprowCheck][index] === placingPlayer
        ) {
          uprowCheck--;
          vertCheck++;
        }
        if (vertCheck >= 4) {
          console.log(`${currentPlayer} wins!`);
          gameOver = true;
          winnerScreen(placingPlayer);
          pointTally(placingPlayer);
        }
        //Switch turns
        if (currentPlayer === "player1") {
          currentPlayer = "player2";
        } else {
          currentPlayer = "player1";
        }
        break;
      }
    }
  }),
);

const newGame = document.querySelector(".btnNewGame");
const newGameOverlay = document.querySelector(".btnNewGameOverlay");
const slotClear = document.querySelectorAll(".slot");

function winnerScreen(placingPlayer) {
  winScreen.style.display = "flex";
  const winMessage = document.querySelector(".winText");
  if (placingPlayer === "player1") {
    winMessage.innerText = "Red Wins!";
  } else {
    winMessage.innerText = "Gold wins!";
  }
}

function resetGame() {
  //Reset gameBoard
  gameBoard = [];
  for (let x = 0; x <= 5; x++) {
    row = [];
    for (let j = 0; j <= 6; j++) {
      row.push(null);
    }
    gameBoard.push(row);
  }
  //Reset gameBoard visually
  slotClear.forEach((slot) => {
    slot.classList.remove("redToken");
    slot.classList.remove("goldToken");
  });
  //Reset current player to player1
  currentPlayer = "player1";
  //Reset game-state to false
  gameOver = false;
  // Win screen reset
  winScreen.style.display = "none";
}

newGame.addEventListener("click", function (e) {
  resetGame();
});

newGameOverlay.addEventListener("click", function (e) {
  resetGame();
});
const scoreText = document.querySelector(".scoreCounter");
function pointTally(placingPlayer) {
  if (placingPlayer === "player1") {
    scoreCounter.p1 += 1;
    p1WinCount.innerText = scoreCounter.p1;
  } else {
    scoreCounter.p2 += 1;
    p2WinCount.innerText = scoreCounter.p2;
  }
}
const title = document.querySelector(".bitcount-grid-single");
const text = title.innerText;

title.innerHTML = "";
for (let i = 0; i < text.length; i++) {
  const span = document.createElement("span");
  span.textContent = text[i];

  if (i % 2 === 0) {
    span.classList.add("even");
  } else {
    span.classList.add("odd");
  }
  title.appendChild(span);
}
