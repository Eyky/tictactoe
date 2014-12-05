/**
 * Created by eyky on 3.12.2014.
 */
var _ = require('lodash');

module.exports = function(history, currentMove){
  var gameFull = false;
  var gameGrid = ['','','','','','','','',''];
  var playerTurn = 0;
  var lastPlayer = null;
  var symbol = null;
  _.each(history, function(event){
    if(event.event === "GameJoined") {
      gameFull = true;
    }

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
    },
    gameWon: function(moveCheck) {
      if(playerTurn%2 === 0){
         symbol = 'X';
      }
      else{

        symbol = '0';
      }
      var tempGrid = gameGrid;
      tempGrid[moveCheck] = symbol;

      if(tempGrid[0] === symbol && tempGrid[1] === symbol && tempGrid[2] === symbol){
        gameGrid[moveCheck] = symbol;
        return true;
      }
      if(tempGrid[0] === symbol && tempGrid[4] === symbol && tempGrid[8] === symbol){
        gameGrid[moveCheck] = symbol;
        return true;
      }
      if(tempGrid[0] === symbol && tempGrid[3] === symbol && tempGrid[6] === symbol){
        gameGrid[moveCheck] = symbol;
        return true;
      }
      if(tempGrid[1] === symbol && tempGrid[4] === symbol && tempGrid[7] === symbol){
        gameGrid[moveCheck] = symbol;
        return true;
      }
      if(tempGrid[2] === symbol && tempGrid[4] === symbol && tempGrid[6] === symbol){
        gameGrid[moveCheck] = symbol;
        return true;
      }
      if(tempGrid[2] === symbol && tempGrid[5] === symbol && tempGrid[8] === symbol){
        gameGrid[moveCheck] = symbol;
        return true;
      }
      if(tempGrid[3] === symbol && tempGrid[4] === symbol && tempGrid[5] === symbol){
        gameGrid[moveCheck] = symbol;
        return true;
      }
      if(tempGrid[6] === symbol && tempGrid[7] === symbol && tempGrid[8] === symbol){
        gameGrid[moveCheck] = symbol;
        return true;
      }
      return false;

    },
    gameDraw: function(){
      if(playerTurn === 8){
        return true;
      }
      return false;
    }

  }
};
