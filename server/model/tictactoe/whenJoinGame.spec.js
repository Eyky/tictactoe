/**
 * Created by eyky on 2.12.2014.
 */


var should = require('should');
var _ = require('lodash');

var tictactoe = require('./tictactoe.js');

describe('join game command', function(){
  it('should emit game joined event', function(){

    var given = [{
      event: "GameCreated",
      user: {
        userName: "Eyky"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    }];
    var when =
    {
      cmd: "JoinGame",
      user: {
        userName: "Doddi"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    };
    var then = [
      {
        event: "GameJoined",
        user: {
          userName: "Doddi"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }];


    var actualEvents = tictactoe(given).executeCommand(when);
    should(actualEvents.length).be.exactly(1);

    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));
  });

  it('should emit game is full when attempting to join a full game', function(){

    var given = [{
      event: "GameCreated",
      user: {
        userName: "Eyky"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
      {
        event: "GameJoined",
        user: {
          userName: "Doddi"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }
    ];

    var when = {cmd: "JoinGame",
      user: {
        userName: "Noob"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"};

    var then = [{
      event: "GameFull",
      user: {
        userName: "Noob"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    }];

    var actualEvents = tictactoe(given).executeCommand(when);
    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));

  });



});

