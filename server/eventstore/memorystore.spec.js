/**
 * Created by eyky on 5.12.2014.
 */
var memoryStore = require('./memorystore');
var should = require('should');

describe('In memory event store', function(){
  it('Should return empty array for unkown id', function(){

    var store = memoryStore();

    var loadedEvents = store.loadEvents('1234');

    should(loadedEvents.length).be.exactly(0);
    should(loadedEvents).be.instanceof(Array);
  });


})
