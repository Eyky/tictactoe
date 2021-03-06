/**
 * Created by eyky on 2.12.2014.
 */
var should = require('should');
var _ = require('lodash');

var tictactoe = require('./tictactoe.js');


describe('create game command', function(){
  it('should emit game created event', function(){

    var given = [];
    var when =
    {
      id: "1",
      cmd: "CreateGame",
      user: {
        userName: "Eyky"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    };
    var then = [
      {
        id: "1",
        event: "GameCreated",
        user: {
          userName: "Eyky"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }
    ];


    var actualEvents = tictactoe(given).executeCommand(when);
    should(actualEvents.length).be.exactly(1);

    should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));
  });


});
