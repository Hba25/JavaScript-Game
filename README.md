# JavaScript-Game

Portfolio JavaScript Game

/\*
---Basic---
Game starts with an empty board of 7 columns and 6 rows  
Players take turns placing pieces that fall vertically. Players will not be able to interact with the board  
once they have concluded their turn until the next player has moved  
50/50 who starts by having the pieces large, and next to each other. The player will choose  
their colour, and the pieces will flicker until one is chosen. That player will start  
After each piece is placed, check if there is a connection of four in a row  
(horizontally, vertically and diagonally)  
If a player has won, show win screen for that player  
If the board has filled without a winner, show draw screen  

Include a button for new game and a scoreboard  
\*/

/\*

---Further---  
Introduce powers that let the player alter the game state  
Each player will start with the flip power-  
Rotate the board in a 90 degree angle either way  
The pieces will be affected by gravity and fall as such  
If players have an equal amount of four in a row, delete them  
Each player will have a freeze power  
Allows the player to freeze a row for one turn while having their move as well  
Only vertical freeze allowed- players cannot place a token in that column  
Players cannot rotate the board during freezing  

\*/

/\*
---Furthest---  
The freeze power can target horizontal rows  
A frozen row will hold the pieces in place even if there is nothing supporting them  

Allow for players to regain their powers through patterns such as  
Freeze- surrounding a opponent piece with 8 pieces in a square formation  
Rotation- 3 up, 3 left, one down (r shape)  

Computer opponent implementation that prioritises blocking player 4th connection  
Otherwise, it will place a piece and build off of that to the clearest path of 4  
unless the path is blocked, in which case it will place another piece to build off of  

\*/

/\*
How to build  

HTML- for the website, new game button and score board  
CSS- Scale for mobile, so the board takes up majority of the screen  
Javascript - event listeners for clicks to place the pieces and logic  
Main functions will be checking for win, updating the scoreboard  
, new game wipe and logic  
\*/

/\*
Gravity implementation - The pieces will be drawn to the bottom of the board  
Align items- flex end but in JS  

\*/
