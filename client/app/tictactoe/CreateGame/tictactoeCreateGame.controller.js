angular.module('tictactoeApp')
  .controller('TictactoeController', function ($scope, $state, $http, TicTacToeService) {
    'use strict';


    function generateUUID(){
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c==='x' ? r : (r&0x3|0x8)).toString(16);
      });
      return uuid;
    }



    //$scope.playGame = false;
    //$scope.fneh = true;
    var genId = generateUUID();
    TicTacToeService.setUUID(genId);

    $scope.processEvents = function(events){
      $scope.processedEvents = events;

        TicTacToeService.setPlayerName($scope.userName);
        TicTacToeService.setPlayerOne(TicTacToeService.getPlayerName());
        TicTacToeService.setGameJoined(true);
        TicTacToeService.setPlayerSymbol(events[0].event);
        TicTacToeService.setUUID(genId);

        $state.go('playgame/:id', {id: events[0].id});

    };

    $scope.createGame = function(){
      var postPromise = $http.post('/api/createGame/',{
          "id":TicTacToeService.getUUID(),
          "cmd":"CreateGame",
          "user":{
            "userName":$scope.userName
          },
          "name":$scope.name,
          "timeStamp":TicTacToeService.getNewDate()
        }
      );
      postPromise.then(function(data){
        $scope.processEvents(data.data);

      });
    };
  });



