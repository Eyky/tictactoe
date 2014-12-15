/**
 * Created by eyky on 13.12.2014.
 */


module.exports = function(page) {
  var tictactoe;

  function nameOfGame(gameName){
    page.name.sendKeys(gameName);
  }

  function nameOfUser(userName){
    page.userName.sendKeys(userName);
  }

  function createGame(){
    page.createGameButton.click();
  }

  function waitForTictactoePage(){
    browser.waitForAngular();
    tictactoe = require('./tictactoe.po');
  }

  function expectGameBoardShowing(){
    expect(tictactoe.board).toBeDefined();
  }

  function expectFirstCellShowing(){
    expect(tictactoe.cell0).toBeDefined();
  }

  function cell0(){
    tictactoe.cell0.click();
  }

  function joinGameName(userName){
    tictactoe.userName.sendKeys(userName);
  }

  function joinGame(){
    tictactoe.joinGameButton.click();
  }





  return {
    nameOfGame:nameOfGame,
    nameOfUser:nameOfUser,
    createGame: createGame,
    waitForTictactoePage:waitForTictactoePage,
    expectGameBoardShowing:expectGameBoardShowing,
    expectFirstCellShowing:expectFirstCellShowing,
    cell0:cell0,
    joinGameName:joinGameName,
    joinGame:joinGame
  }


};

