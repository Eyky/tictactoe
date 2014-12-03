/**
 * Created by eyky on 3.12.2014.
 */
var should = require('should');
var _ = require('lodash');

var tictactoe = require('./tictactoe.js');


describe('game Won command', function(){
  it('should emit Game Won event', function(){

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
    },
    {
      event: "MoveMade",
      user: {
        userName: "Eyky"
      },
      move: "0",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Doddi"
      },
      move: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Eyky"
      },
      move: "4",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Doddi"
      },
      move: "2",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    }];



    var when = {
      cmd: "MakeMove",
      user: {
        userName: "Eyky"
      },
      move: "8",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"}

    var then = [
      {
      event: "GameWon",
        user:{
          userName: "Eyky"
        },
        move:"8",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
    }];

    var actualEvents = tictactoe(given).executeCommand(when);
    //should(actualEvents.length).be.exactly(1);

    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));

  });
});
