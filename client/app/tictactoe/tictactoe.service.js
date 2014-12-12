angular.module('tictactoeApp')
  .factory('TicTacToeService', function () {
  'use strict';

    var playerOne;
    var playerTwo;
    var playerSymbol;
    var gameUUID;
    var gameJoined;
    var gameName;
    var playerName;


    return {

      setPlayerName: function(name){
        playerName = name;
      },
      getPlayerName: function(){
        return playerName;
      },
      setPlayerOne: function(name){
        playerOne = name;
      },
      getPlayerOne: function(){
        return playerOne;
      },
      setPlayerTwo: function(name){
        playerTwo = name;
      },
      getPlayerTwo: function(){
        return playerTwo;
      },
      setGameName: function(name){
        gameName = name;
      },
      getGameName: function(){
        return gameName;
      },
      setPlayerSymbol: function(eventString){
        if(eventString === 'GameCreated'){
          playerSymbol = 'X';
        }
        else if(eventString === 'GameJoined'){
          playerSymbol = 'O';
        }
      },
      getPlayerSymbol: function(){
        return playerSymbol;
      },
      setUUID: function(uuid){
        gameUUID = uuid;
      },
      getUUID: function(){
        return gameUUID;
      },
      getNewDate: function(){
        return new Date();
      },
      getGameJoined: function(){
        return gameJoined;
      },
      setGameJoined: function(hasJoined){
        gameJoined = hasJoined;
      }


    };
  });
