## Connect Four Game

## Objective

Two players take turns placing pieces in a 6-row, 7-column grid. Pieces fall to the lowest available slot in its column. The first player to connect four (horizontally, vertically or diagonally) wins. If the board fills without a winner, declare a draw. A scoreboard should carry the wins and losses throughout the session and include a new game button.

## HTML

- [ ] Board container (basic grid 6x7)
- [ ] Each cell is represented (<div> with column/row)
- [ ] New game button
- [ ] Scoreboard that shows wins/losses for the players
- [ ] Win/draw overlay
- [ ] Piece selection screen shows flickering pieces to choose starting player
- [ ] (Furthest) Buttons to activate powers for each player (flip, freeze)

## SCSS

- [ ] Board layout using Grid with gaps
- [ ] Circular piece styling using border-radius:50%
- [ ] Two distinct colours for the pieces
- [ ] Responsive design - the board should fill screen on mobile
- [ ] Flicker animation for selection screen
- [ ] Piece-drop animation for gravity effect
- [ ] Win/Draw screen styled as a centered overlay
- [ ] Hover effect on columns to indicate click target

## JavaScript

### Core mechanics

- [ ] Board represented as 2D array- 6 rows by 7 columns
- [ ] Render the board from the array on every move
- [ ] Column click listener to determine which column was clicked
- [ ] Place piece in the lowest empty cell of that column
- [ ] Update board array and re-render it
- [ ] After each piece is placed:
  - [ ] Check for win in every direction
  - [ ] If a player has won, show win screen, update scoreboard and lock board til new game button is pressed
  - [ ] If board is full and no player has won, show draw screen
- [ ] Switch turns between players
- [ ] New game button should:
  - [ ] Reset board array
  - [ ] Hide win/draw screens
  - [ ] Re-trigger the start-selection screen

### Game-start piece selection

- [ ] Both player pieces are displayed large
- [ ] Players choose their colour, then pieces begin to flicker. The one
      it randomly lands on is the player that starts
- [ ] First turn begins

### Lower priority

### Flip power

- [ ] Each player gets one flip use at the start of the match
- [ ] When activated, the board will rotate 90 degrees clockwise or anti-clockwise
- [ ] Pieces fall vertically in the new orientation till they hit the new bottom or another piece
- [ ] Any connected fours for both players are removed from the board

### Freeze power (vertical)

- [ ] Each player gets one column freeze per game
- [ ] When player freezes a column, neither player can place a piece in that column. They still get their turn and it is frozen till their next turn starts
  - [ ] Opponent cannot play a piece in that column until their next turn
  - [ ] The player cannot play a piece first and then freeze
- [ ] Board rotation is disabled while any column is frozen

### Lowest priority

### Freeze power (horizontal)

- [ ] Rows can be frozen and will act as a solid base. Pieces will stack on top of this base, unable to fall to the bottom of the board
- [ ] Flip power is available and will maintain their freeze of the row, and act as a vertical freeze
- [ ] Lasts one turn

### Power regain

- [ ] **Freeze** can be regained if a player surrounds an opponents piece with 8 pieces in a square formation around it
- [ ] **Flip** can be regained if a player creates an "r" shape: three up, three left, one down with their pieces in any orientation

### Computer opponent

- [ ] Computer will first check if it can win immediately
  - [ ] If not, it will check if it should block the player from winning
  - [ ] Computer will place its piece randomly
  - [ ] In subsequent turns, build off of it to achieve four in a row
  - [ ] Computer can also use powers

### Utility

- [ ] Pieces will always fill the lowest empty cell in column
- [ ] Will include animations for dropping tokens or power usage
- [ ] Track wins/losses for each player through the session
