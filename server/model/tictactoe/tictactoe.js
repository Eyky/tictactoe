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
            id: "1",
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
              id: cmd.id,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }

          return [{
            event: "GameJoined",
            id: cmd.id,
            user: cmd.user,
            name: cmd.name,
            timeStamp: cmd.timeStamp
          }];
        },
        "MakeMove": function(cmd){
          if(gameState.yourTurn() === cmd.user.userName) {
            return [{
              event: "NotYourTurn",
              user: cmd.user,
              move: cmd.move,
              id: cmd.id,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }
          if(gameState.spotTaken(cmd.move))
          {
            return[{
              event: "SpotTaken",
              user: cmd.user,
              move: cmd.move,
              id: cmd.id,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }
          if(gameState.gameWon(cmd.move))
          {
            return[{
              event: "MoveMade",
              user: cmd.user,
              move: cmd.move,
              id: cmd.id,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            },
            {

              event: "GameWon",
              user: cmd.user,
              id: cmd.id,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }
          if(gameState.gameDraw())
          {
            return[{
              event: "MoveMade",
              user: cmd.user,
              move: cmd.move,
              id: cmd.id,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            },
          {

              event: "GameDraw",
              user: cmd.user,
              id: cmd.id,
              name: cmd.name,
              timeStamp: cmd.timeStamp
            }];
          }

          return[{
            event: "MoveMade",
            id: cmd.id,
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
