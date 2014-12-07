/**
 * Created by eyky on 6.12.2014.
 */

'use strict';

describe('Controller: Tictactoe', function (){


  // load the controller's module
  beforeEach(module('tictactoeApp'));

  var TictactoeControllerCtrl, scope, httpBackend, http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, $controller, $rootScope, $http) {
    http = $http;
    httpBackend = $injector.get('$httpBackend');

    scope = $rootScope.$new();
    TictactoeControllerCtrl = $controller('TictactoeController', {
      $scope: scope
    });
  }));


  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should post variables from scope for name and username and' +
  ' process resulting events', function(){

    httpBackend.expectPOST('/api/createGame/',
      {
        id: "1",
        cmd: "CreateGame",
        user: {
          userName: "Eyky"
        },
        name: "LeGame",
        timeStamp: "2014-12-02T11:29:29"
      }).respond({
        response: [{
          id: "1",
          event: "GameCreated",
          user: {
            userName: "Eyky"
          },
          name: "LeGame",
          timeStamp: "2014-12-02T11:29:29"
        }]
      });

    scope.name ="LeGame";
    scope.userName = "Eyky";

    scope.createGame();
    httpBackend.flush();

    expect(scope.processedEvents.length).toBe(1);


  });

});