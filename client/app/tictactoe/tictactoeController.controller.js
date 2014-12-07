angular.module('tictactoeApp')
  .controller('TictactoeController', function ($scope, $http) {
    "use strict";
    $scope.processEvents = function(events){
      $scope.processedEvents = events;
    };

    $scope.createGame = function(){
      var postPromise = $http.post('/api/createGame/',{
          "id":"1",
          "cmd":"CreateGame",
          "user":{
            "userName":$scope.userName
          },
          "name":$scope.name,
          "timeStamp":"2014-12-02T11:29:29"
        }
      );
      postPromise.then(function(data){
        $scope.processEvents(data.data.response);
      });
    };

  });
