/**
 * Created by eyky on 13.12.2014.
 */


'use strict';

var CreateGamePage = function() {
  this.container = element(by.css('.container'));
  this.name = element(by.css('#name'));
  this.userName = element(by.css('#userName'));
  this.createGameButton = element(by.css('#createGame'));
};

module.exports = new CreateGamePage();

