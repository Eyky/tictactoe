/**
 * Created by eyky on 2.12.2014.
 */


var should = require('should');
var _ = require('lodash');

var tictactoe = require('./tictactoe.js');

describe('Make Move command', function(){
  it('should emit move made', function(){

    var given = [{
      id: "1",
      event: "GameCreated",
      user: {
        userName: "Eyky"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
      {
        id: "1",
        event: "GameJoined",
        user: {
          userName: "Doddi"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }
    ];


    var when =
    {
      id: "1",
      cmd: "MakeMove",
      user: {
        userName: "Eyky"
      },
      move: "0",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    };
    var then = [
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "0",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }];


    var actualEvents = tictactoe(given).executeCommand(when);
    //should(actualEvents.length).be.exactly(1);

    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));
  });

  it('should emit Spot Taken', function(){




    var given = [{
      id: "1",
      event: "GameCreated",
      user: {
        userName: "Eyky"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "GameJoined",
        user: {
          userName: "Doddi"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "0",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }
    ];

    var when = {
      id: "1",
      cmd: "MakeMove",
      user: {
        userName: "Doddi"
      },
      move: "0",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    };

    var then = [
      {
        id: "1",
        event: "SpotTaken",
        user: {
          userName: "Doddi"
        },
        move: "0",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }
    ];


    var actualEvents = tictactoe(given, when.move).executeCommand(when);

    //should(actualEvents.length).be.exactly(1);

    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));

  });

  it('should emit Not your turn ', function(){

    var given = [{
      id: "1",
      event: "GameCreated",
      user: {
        userName: "Eyky"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
      {
        id: "1",
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
        id: "1",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }
    ];

    var when = {
      id: "1",
      cmd: "MakeMove",
      user: {
        userName: "Eyky"
      },
      move: "2",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    };

    var then = [
      {
        id: "1",
        event: "NotYourTurn",
        user: {
          userName: "Eyky"
        },
        move: "2",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }];

    var actualEvents = tictactoe(given).executeCommand(when);

    //should(actualEvents.length).be.exactly(1);

    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));

  });

  it('should emit Game Won event', function(){

    var given = [{
      id: "1",
      event: "GameCreated",
      user: {
        userName: "Eyky"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
      {
        id: "1",
        event: "GameJoined",
        user: {
          userName: "Doddi"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "0",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Doddi"
        },
        move: "1",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "4",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Doddi"
        },
        move: "2",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }];



    var when = {
      id: "1",
      cmd: "MakeMove",
      user: {
        userName: "Eyky"
      },
      move: "8",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"};

    var then = [
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "8",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "GameWon",
        user:{
          userName: "Eyky"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }];

    var actualEvents = tictactoe(given).executeCommand(when);


    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));

  });

  it('should emit GameDraw event', function(){


    var given = [{
      id: "1",
      event: "GameCreated",
      user: {
        userName: "Eyky"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    },
      {
        id: "1",
        event: "GameJoined",
        user: {
          userName: "Doddi"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "4",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Doddi"
        },
        move: "0",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "2",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Doddi"
        },
        move: "6",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "3",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Doddi"
        },
        move: "5",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "7",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Doddi"
        },
        move: "1",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }];

    var when = {
      id: "1",
      cmd: "MakeMove",
      user: {
        userName: "Eyky"
      },
      move: "8",
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    };

    var then = [
      {
        id: "1",
        event: "MoveMade",
        user: {
          userName: "Eyky"
        },
        move: "8",
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      },
      {
        id: "1",
        event: "GameDraw",
        user: {
          userName: "Eyky"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }];

    var actualEvents = tictactoe(given).executeCommand(when);


    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));

  });




});

