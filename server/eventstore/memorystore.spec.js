/**
 * Created by eyky on 5.12.2014.
 */
var memoryStore = require('./memorystore');
var should = require('should');

describe('In memory event store', function(){


  var createGameEvent =
    {
      id: "1",
      event: "GameCreated",
      user: {
        userName: "Eyky"
      },
      name: "LeGame",
      timeStamp: "2014-12-02T11:29:29"
    }
  ;

  var joinGameEvent = {
    id: "2",
    event: "GameJoined",
    user: {
      userName: "Doddi"
    },
    name: "LeGame",
    timeStamp: "2014-12-02T11:29:29"
  };




  it('Should return empty array for unkown id', function(){

    var store = memoryStore();

    var loadedEvents = store.loadEvents('1234');

    should(loadedEvents.length).be.exactly(0);
    should(loadedEvents).be.instanceof(Array);
  });

  it('Should return events previously stored', function(){




    var store = memoryStore();

    store.storeEvents('1234', createGameEvent );

    var loadedEvents = store.loadEvents('1234');

    should(loadedEvents).eql([createGameEvent]);
  });

  it('should append new events to older events', function(){


    var store = memoryStore();

    store.storeEvents('1234', [createGameEvent]);
    store.storeEvents('1234', [joinGameEvent]);

    var loadedEvents = store.loadEvents('1234');

    should(loadedEvents).eql([createGameEvent, joinGameEvent]);

  });
});
