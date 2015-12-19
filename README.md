# Tile-Flip-MemoryGame
A Javascript based timed memory game that requires users to match similar tiles by flipping the right pair.
The game can be run by simply downloading the folder and running the game.html file

Game Features:

Requiring player to provide a nickname
Enabling play button only after nickname has been provided
Flipping and timing the tiles correctly
Tracking player time and clicks
Showing the final message once the game has ended
Storing records of games in a cookie
Displaying different element of the game at the right time and avoiding creating new pages

How the game works:

Once the player clicks on first tile, the tile is flipped and stays flipped to show the image of the tile. 
Then the player can click on another tile, if the tile matches the flipped one, it stays flipped; if it doesn't match,
then it will be flipped back after a delay to allow the user to see the images.

The game first ask the player to enter their nickname. Once nickname is provided, the "Play" button becomes active.
Once the players clicks on "Play" button, the timer starts and the game starts. The game keeps track of time and number of clicks
and shows the result once all the tiles have been flipped correctly. 
Clicking on "Play" button in the middle of the game starts a new game. 
The records of the last 10 games are stored in cookies and shown to the user when they come back and enter the same nickname. 
