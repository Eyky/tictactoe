'use strict';

angular.module('tictactoeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('playgame/:id', {
        url: "/playgame/:id",
        templateUrl: 'app/tictactoe/tictactoegame.html'
      })
    $locationProvider.html5Mode(true);
  });
