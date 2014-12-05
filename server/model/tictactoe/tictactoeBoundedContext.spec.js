/**
 * Created by eyky on 5.12.2014.
 */
var should = require('should');
var _ = require('lodash');

describe('tictactoe game context using stubs.', function(){

  it('should route command to instantiated tictactoe game with event stream' +
  ' from memoryStore and return and store generated events ', function(){

    var calledWithEventStoreId;
    var storedEvents;
    var eventStoreStub = {
      loadEvents: function(aggregatedID){
        calledWithEventStoreId = aggregatedID;
        return [];
      },
      storeEvents : function(aggregatedId, events){
        storedEvents = events;
      }
    };

    var executedCommand = {};

    var tictactoeStub = function(history){
      return {
        executeCommand : function(cmd){
          executedCommand = cmd;
          return [];
        }
      }
    };

    var commandHandlers = tictactoeStub;

    var boundedContext = require('./tictactoeBoundedContext')(eventStoreStub, commandHandlers);

    var emptyCommand = {
      id: "123"
    };

    var events = boundedContext.handleCommand(emptyCommand);

    should(executedCommand.id).be.exactly("123");
    should(calledWithEventStoreId).be.exactly("123");
    should(storedEvents).be.exactly(events);


  });

});
