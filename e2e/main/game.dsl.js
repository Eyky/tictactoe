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

  return {
    nameOfGame:nameOfGame,
    nameOfUser:nameOfUser,
    createGame: createGame,
    waitForTictactoePage:waitForTictactoePage,
    expectGameBoardShowing:expectGameBoardShowing,
    expectFirstCellShowing:expectFirstCellShowing


  }


};
