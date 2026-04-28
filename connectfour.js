gameBoard = [];

for (let x = 0; x <= 5; x++) {
  row = [];
  for (let j = 0; j <= 6; j++) {
    row.push(null);
  }
  gameBoard.push(row);
}
console.log(gameBoard);
