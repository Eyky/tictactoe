/**
 * Created by eyky on 8.12.2014.
 */

angular.module('tictactoeApp')
  .controller('tictactoeGameController', function ($scope, $http, TicTacToeService, $stateParams) {




    TicTacToeService.setUUID($stateParams.id);



    $scope.gameJoined = TicTacToeService.getGameJoined();



    $scope.processEvents = function(events){


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
        console.log(TicTacToeService.getPlayerSymbol())

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
        if(event.event === 'MoveMade'){
          console.log('event', event.move.target);
          //console.log(TicTacToeService.getPlayerSymbol());
          $("#" + event.move.target).empty().append(event.move.symbol);

        }
        if(event.event === 'PlayerWins'){
          console.log(event);
          if(event.user.userName !== TicTacToeService.getPlayer()){
            draw(event.move.target, event.move.symbol);
            console.log('You Lose');
            clearInterval(intervalID);
          }
        }
      });

    };


    var intervalID = setInterval(function(){
      $scope.updateEvents();
    }, 2000);


    });
