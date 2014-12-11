angular.module('tictactoeApp')
  .controller('TictactoeController', function ($scope, $state, $http, TicTacToeService) {
    "use strict";


    //$scope.playGame = false;
    //$scope.fneh = true;
    var genId = generateUUID();

    $scope.processEvents = function(events){
      $scope.processedEvents = events;
        console.log(events);
        TicTacToeService.setPlayerName($scope.userName);
        TicTacToeService.setPlayerOne(TicTacToeService.getPlayerName());
        TicTacToeService.setGameJoined(true);
        TicTacToeService.setPlayerSymbol(events[0].event);
        TicTacToeService.setUUID(genId);
        console.log(TicTacToeService.getUUID());
        $state.go('playgame/:id', {id: events[0].id});

    };

    $scope.createGame = function(){
      console.log("fneh");
      var postPromise = $http.post('/api/createGame/',{
          "id":genId,
          "cmd":"CreateGame",
          "user":{
            "userName":$scope.userName
          },
          "name":$scope.name,
          "timeStamp":"2014-12-02T11:29:29"
        }
      );
      postPromise.then(function(data){
        $scope.processEvents(data.data);

      });
    };
  });


function generateUUID(){
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};
