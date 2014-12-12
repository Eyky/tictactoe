/**
 * Created by eyky on 8.12.2014.
 */

angular.module('tictactoeApp')
  .controller('tictactoeGameController', function ($scope, $http, TicTacToeService, $stateParams, $interval) {

    'use strict';

    TicTacToeService.setUUID($stateParams.id);



    $scope.gameJoined = TicTacToeService.getGameJoined();



    $scope.processEvents = function(events){
      $scope.processedEvents = events;

      console.log(events);
      if(events[0].event === 'GameJoined'){
        console.log("GAME JOINED");
        console.log($scope.userName);
        TicTacToeService.setPlayerName($scope.userName);
        TicTacToeService.setPlayerTwo(TicTacToeService.getPlayerName());
        TicTacToeService.setPlayerSymbol(events[0].event);
        //TicTacToeService.setGameName($scope.name);
        TicTacToeService.setGameJoined(true);
        $scope.gameJoined = TicTacToeService.getGameJoined();


      }
      if(events[0].event === 'MoveMade'){
        console.log("MOVE MADE");
        console.log(events[0].move);



      }


    };





    $scope.makeMove = function(event){


      console.log('target ', event.target.id);

      var postPromise = $http.post('/api/makeMove/',{
          "id":TicTacToeService.getUUID(),
          "cmd":"MakeMove",
          "user":{
            "userName":TicTacToeService.getPlayerName()
          },
          "name":TicTacToeService.getGameName(),
          move:{
            target: event.target.id,
            symbol: TicTacToeService.getPlayerSymbol()
          },
          "timeStamp":"2014-12-02T11:29:29"
        }
      );
      postPromise.then(function(data){
        $scope.processEvents(data.data);
      });
    };






    $scope.joinGame = function(){

      var postPromise = $http.post('/api/joinGame/',{
        id: TicTacToeService.getUUID(),
        cmd: 'JoinGame',
        user:{
          userName:$scope.userName
        },
        "name":TicTacToeService.getGameName(),
        timeStamp: TicTacToeService.getNewDate()

      });

      postPromise.then(function(data){
        //console.log(data.data);

        $scope.processEvents(data.data);


      });
    };


    $scope.updateEvents = function() {
      var getPromise = $http.get('/api/getEvents/' + TicTacToeService.getUUID());

      getPromise.then(function(data) {
        $scope.processPastEvents(data.data);
        //console.log(data);
      });
    };

    $scope.processPastEvents = function(data){
      data.forEach(function(event){
        //console.log(event);
        if(event.event === 'MoveMade'){

          $("#" + event.move.target).empty().append(event.move.symbol);

        }
        if(event.event === 'GameWon'){

          if(event.user.userName !== TicTacToeService.getPlayerName()){

            console.log('You Lose');
            clearInterval(intervalID);
          }
          else{
            console.log('You win');
          }
        }
        if(event.event === 'GameDraw'){
          console.log('game draw');
        }
      });

    };


    var intervalID = $interval(function(){
      $scope.updateEvents();
    }, 666);


    });
