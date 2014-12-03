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
              event: "GameFull",
              user: cmd.user,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }

          return [{
            event: "GameJoined",
            user: cmd.user,
            name: cmd.name,
            timeStamp: cmd.timeStamp
          }]
        },
        "MakeMove": function(cmd){
          if(gameState.spotTaken())
          {
            return[{
              event: "SpotTaken",
              user: cmd.user,
              move: cmd.move,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }
          return[{
            event: "MoveMade",
            user: cmd.user,
            move: cmd.move,
            name: cmd.name,
            timeStamp: cmd.timeStamp
          }]
        }
      }
      return cmdHandler[cmd.cmd](cmd);
    }
  }
};
