

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

    var genId = 1;
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

});
