/**
 * Created by eyky on 15.12.2014.
 */


'use strict';

var TictactoePage = function() {
  this.container = element(by.css('.container'));
  this.userName = element(by.css('#userName'));
  this.joinGameButton = element(by.css('#joinGame'));
  this.result = element(by.css('#result'));
  this.board = element(by.css('#tictactoe2'));
  this.cell0 = element(by.css('.cell0'));
  this.cell1 = element(by.css('.cell1'));
  this.cell2 = element(by.css('.cell2'));
  this.cell3 = element(by.css('.cell3'));
  this.cell4 = element(by.css('.cell4'));
  this.cell5 = element(by.css('.cell5'));
  this.cell6 = element(by.css('.cell6'));
  this.cell7 = element(by.css('.cell7'));
  this.cell8 = element(by.css('.cell8'));

};


module.exports = new TictactoePage();
