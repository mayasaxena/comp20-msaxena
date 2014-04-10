README.txt
Assigment 4
Maya Saxena

All aspects of the assignment have been correctly implemented.

Approximately 12 hours were spent on this assignment 

The score and grid are stored in a variable called gameState which is in
localStorage and gets updated every time an action in the game happens.


To get the game to send data to the server, I added 

        var d = new Date();
        $.ajax({
        url:"http://gamecenter-2048-msaxena.herokuapp.com/submit.json",
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify({"username" : "ms", "score" : this.score, "grid" : this.grid, "created_at" : d.toLocaleString()}),
      });

to game_manager.js in the actuate function after the game manager checks if the game is over but before the game state is cleared.


In context:

GameManager.prototype.actuate = function () {
  if (this.storageManager.getBestScore() < this.score) {
    this.storageManager.setBestScore(this.score);
  }

  // Clear the state when the game is over (game over only, not win)
  if (this.over) {
      var d = new Date();
      $.ajax({
        url:"http://gamecenter-2048-msaxena.herokuapp.com/submit.json",
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify({"username" : "ms", "score" : this.score, "grid" : this.grid, "created_at" : d.toLocaleString()}),
      });
    this.storageManager.clearGameState();

  } else {
    this.storageManager.setGameState(this.serialize());
  }

  ... etc. 