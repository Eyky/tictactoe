/**
 * Created by eyky on 3.12.2014.
 */
var _ = require('lodash');

module.exports = function(history, currentMove){
  var gameFull = false;
  var gameGrid = ['','','','','','','','',''];
  var playerTurn = 0;
  var lastPlayer = null;
  _.each(history, function(event){
    if(event.event === "GameJoined") {
      gameFull = true;

    }
  });


  _.each(history, function(event){
    if(event.event === "MoveMade"){
      playerTurn++;
      lastPlayer = event.user.userName;
      if(playerTurn%2 === 0){
        gameGrid[event.move] = '0';
      }
      else{

        gameGrid[event.move] = 'X';
      }

    }
  });


  console.log(gameGrid);

  return {
    gameFull: function () {
      return gameFull;
    },
    spotTaken: function (currentMove) {
      if (gameGrid[currentMove] === '') {
        return false;
      }
      return true;
    },
    yourTurn: function () {
      return lastPlayer;
    }

  }
};
