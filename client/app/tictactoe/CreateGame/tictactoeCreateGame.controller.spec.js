/**
 * Created by eyky on 11.12.2014.
 */

//yes I know, this was not TDD.

'use strict';
describe('Controller: TictactoeController', function() {

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

    scope = $rootScope.$new();
    TictactoeControllerCtrl = $controller('TictactoeController', {
      $scope: scope
    });
  }));


  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });


  it('should emit a creategame event when putton is pushed', function(){


    httpBackend.expectPOST('/api/createGame/', {
      id:"1",
      cmd: "CreateGame",
      user:{
        userName:"Eyky"
      },
      name:"leGame",
      timeStamp:"2014-01-01T03:06:00"
    }).respond(
      [
        {
          id:"1",
          event: "GameCreated",
          user:{
            userName:"Eyky"
          },
          name:"leGame",
          timeStamp:"2014-01-01T03:06:00"
        }
      ]
    );


    scope.name = "leGame";
    scope.userName = "Eyky";

    scope.createGame();

    httpBackend.expectGET('app/main/main.html').respond('');
    httpBackend.expectGET('app/tictactoe/tictactoegame.html').respond('');
    httpBackend.flush();
    expect(scope.processedEvents.length).toBe(1);
  });

});
