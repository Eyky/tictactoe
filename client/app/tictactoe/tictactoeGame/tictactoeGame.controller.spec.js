

'use strict';

describe('Controller: tictactoeGameController', function(){

  // load the controller's module
  beforeEach(module('tictactoeApp'));

  var TictactoeControllerCtrl, scope, httpBackend, http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ( $injector, $controller, $rootScope, $http, TicTacToeService) {
    http = $http;
    httpBackend = $injector.get('$httpBackend');

    TicTacToeService.getNewDate = function () {
      return "2014-01-01T03:06:00";
    };

    TicTacToeService.getUUID = function () {
      return "1";
    };

    TicTacToeService.getGameName = function(){
      return "leGame";
    };

    TicTacToeService.getPlayerSymbol = function(){
      return "X";
    };

    TicTacToeService.getPlayerName = function(){
      return "Eyky";
    };

    TicTacToeService.getSquareClicked = function(){
      return "4";
    };



    scope = $rootScope.$new();
    TictactoeControllerCtrl = $controller('tictactoeGameController', {
      $scope: scope
    });
  }));


  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should emit GameJoined when join game button is clicked', function(){


    httpBackend.expectPOST('/api/joinGame/', {
      id:"1",
      cmd: "JoinGame",
      user:{
        userName:"Eyky"
      },
      name:"leGame",
      timeStamp:"2014-01-01T03:06:00"
    }).respond(
      [
        {
          id:"1",
          event: "GameJoined",
          user:{
            userName:"Eyky"
          },
          name:"leGame",
          timeStamp:"2014-01-01T03:06:00"
        }
      ]
    );

    scope.userName = "Eyky";
    scope.joinGame();

    httpBackend.flush();
    expect(scope.processedEvents.length).toBe(1);

  });

  it('should emit MoveMade when a square is clicked', function(){

    httpBackend.expectPOST('/api/makeMove/', {
      id: "1",
      cmd: 'MakeMove',
      user:{
        userName: "Eyky"
      },
      name: "leGame",
      move:{
        target: "4",
        symbol: "X"
      },
      timeStamp: "2014-01-01T03:06:00"
    }).respond([{
      id: "1",
      event: "MoveMade",
      user:{
        userName: "Eyky"
      },
      name: "leGame",
      move:{
        symbol: "X",
        target: "4"
      }
    }]);


    var event = {
      target:{
        cellIndex: '4'
      }
    };

    scope.makeMove(event);

    httpBackend.flush();
    expect(scope.processedEvents.length).toBe(1);


  });

});
