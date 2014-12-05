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
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "GameJoined",
      user: {
        userName: "Doddi"
      },
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Eyky"
      },
      move: "0",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Doddi"
      },
      move: "1",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Eyky"
      },
      move: "4",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Doddi"
      },
      move: "2",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    }];



    var when = {
      cmd: "MakeMove",
      user: {
        userName: "Eyky"
      },
      move: "8",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"}

    var then = [
      {
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "8",
        id: "1",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
      event: "GameWon",
        user:{
          userName: "Eyky"
        },
        id: "1",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
    }];

    var actualEvents = tictactoe(given).executeCommand(when);


    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));

  });

  it('should emit GameDraw event', function(){


    var given = [{
      event: "GameCreated",
      user: {
        userName: "Eyky"
      },
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "GameJoined",
      user: {
        userName: "Doddi"
      },
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Eyky"
      },
      move: "4",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Doddi"
      },
      move: "0",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Eyky"
      },
      move: "2",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Doddi"
      },
      move: "6",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Eyky"
      },
      move: "3",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Doddi"
      },
      move: "5",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Eyky"
      },
      move: "7",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
    {
      event: "MoveMade",
      user: {
        userName: "Doddi"
      },
      move: "1",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    }];

    var when = {
      cmd: "MakeMove",
      user: {
        userName: "Eyky"
      },
      move: "8",
      id: "1",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    };

    var then = [
      {
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "8",
        id: "1",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        event: "GameDraw",
        user: {
          userName: "Eyky"
        },
        id: "1",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }];

    var actualEvents = tictactoe(given).executeCommand(when);


    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));

  });

});
