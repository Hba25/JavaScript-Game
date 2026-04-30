gameBoard = [];

for (let x = 0; x <= 5; x++) {
  row = [];
  for (let j = 0; j <= 6; j++) {
    row.push(null);
  }
  gameBoard.push(row);
}

const colTrigger = document.querySelectorAll(".column");

let currentPlayer = "player1";
colTrigger.forEach((column, index) =>
  column.addEventListener("click", function (e) {
    for (let row = 5; row >= 0; row--) {
      if (gameBoard[row][index] === null) {
        console.log(row, index);
        gameBoard[row][index] = currentPlayer;
        console.log(gameBoard);
        const colourObj = document.querySelector(
          `.slot[data-row= "${row}"][data-column= "${index}"]`,
        );
        const placingPlayer = currentPlayer;
        if (placingPlayer === "player1") {
          colourObj.classList.add("redToken");
        } else {
          colourObj.classList.add("goldToken");
        }

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
