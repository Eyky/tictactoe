/**
 * Created by eyky on 3.12.2014.
 */
var _ = require('lodash');

module.exports = function(history, currentMove){
  var gameFull = false;
  var spotTaken = false;
  _.each(history, function(event){
    if(event.event === "GameJoined") {
      gameFull = true;
    }
  });
  _.each(history, function(move){
    if(move.move === currentMove){
      spotTaken = true;
    }
  });



  return {
    gameFull : function(){
      return gameFull;
    },
    spotTaken: function(){
      return spotTaken;
    }
  }
};
