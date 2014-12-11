/**
 * Created by eyky on 2.12.2014.
 */

module.exports = function(history, currentMove){

  var tictactoeState = require('./gameState.js');

  var gameState = tictactoeState(history, currentMove);


  return {
    executeCommand: function(cmd) {


      var cmdHandler = {
        "CreateGame": function (cmd) {
          return [{
            id: cmd.id,
            event: "GameCreated",
            user: cmd.user,
            name: cmd.name,
            timeStamp: cmd.timeStamp

          }]
        },
        "JoinGame": function (cmd) {
          if(gameState.gameFull())
          {
            return [{

              id: cmd.id,
              event: "GameFull",
              user: cmd.user,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }

          return [{
            id: cmd.id,
            event: "GameJoined",
            user: cmd.user,
            name: cmd.name,
            timeStamp: cmd.timeStamp
          }];
        },
        "MakeMove": function(cmd){
          if(gameState.yourTurn() === cmd.user.userName) {
            return [{
              id: cmd.id,
              event: "NotYourTurn",
              user: cmd.user,
              move: {
                target: cmd.move.target,
                symbol: cmd.move.symbol
              },
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }
          if(gameState.spotTaken(cmd.move.target))
          {
            return[{
              id: cmd.id,
              event: "SpotTaken",
              user: cmd.user,
              move: {
                target: cmd.move.target,
                symbol: cmd.move.symbol
              },
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }
          if(gameState.gameWon(cmd.move.target))
          {
            return[{
              id: cmd.id,
              event: "MoveMade",
              user: cmd.user,
              move: {
                target: cmd.move.target,
                symbol: cmd.move.symbol
              },
              name: cmd.name,
              timeStamp: cmd.timeStamp
            },
            {

              id: cmd.id,
              event: "GameWon",
              user: cmd.user,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }
          if(gameState.gameDraw())
          {
            return[{
              id: cmd.id,
              event: "MoveMade",
              user: cmd.user,
              move: {
                target: cmd.move.target,
                symbol: cmd.move.symbol
              },
              name: cmd.name,
              timeStamp: cmd.timeStamp
            },
          {

              id: cmd.id,
              event: "GameDraw",
              user: cmd.user,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }

          return[{
            id: cmd.id,
            event: "MoveMade",
            user: cmd.user,
            move: {
              target: cmd.move.target,
              symbol: cmd.move.symbol
            },
            name: cmd.name,
            timeStamp: cmd.timeStamp
          }]
        }


        }

      return cmdHandler[cmd.cmd](cmd);
    }
  }
};
