/**
 * Created by eyky on 2.12.2014.
 */
var should = require('should');
var _ = require('lodash');

var tictactoe = [{
  event: "GameCreated",
  user: {
    userName: "Eyky"
  },
  name: "LeGame",
  timeStamp: "2014-12-02T11:29:29"

}];

describe('create game command', function(){
  it('should emit game created event', function(){

    var given = [];
    var when =
    {
      cmd: "CreateGame",
      user: {
        userName: "Eyky"
      },
      name: "TheFirstGame",
      timeStamp: "2014-12-02T11:29:29"
    };
    var then = [
      {
        event: "GameCreated",
        user: {
          userName: "Eyky"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }
    ];




    should(JSON.stringify(tictactoe)).be.exactly(JSON.stringify(then));
  });


});
