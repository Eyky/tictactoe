

'use strict';

console.debug = console.log;

var gameDSL = require('./game.dsl');

describe('Tictactoe game play', function() {
  var page;
  var game;
  var tictactoe;

  beforeEach(function() {
    browser.get('/');
    page = require('./creategame.po');
    game = gameDSL(page);
    tictactoe = require('./tictactoe.po');
  });
/*
  it('should accept game name and username and create game', function() {

    browser.driver.wait(function(){
      return    browser.driver.isElementPresent(by.css('.container')).then(function(el){
        return el === true;
      });
    }).
      then(function(){
        game.nameOfGame("Cheese!");
        game.nameOfUser("Jerry!");
        game.createGame();

        game.waitForTictactoePage();
        game.expectGameBoardShowing();
        game.expectFirstCellShowing();
        tictactoe.cell0.click();
      });

  });
*/

  it('should play a game. Player two wins. Moves after result are impossible', function(){



        game.nameOfGame("Cheese!");
        game.nameOfUser("Jerry!");
        game.createGame();

        game.waitForTictactoePage();
        game.expectGameBoardShowing();
        game.expectFirstCellShowing();
        browser.sleep(1000);
        tictactoe.cell0.click();
        browser.sleep(1000);
        expect(tictactoe.cell0.getText()).toBe('X');


        browser.getCurrentUrl().then(function(url) {
          browser.getAllWindowHandles().then(function (handles) {
            var firstwindow = handles[0];


            //browser.executeScript('window.open("'+ url +'", "second-window")');
            browser.executeScript('window.open("'+ url +'", "second-window","status=yes,toolbar=no,menubar=no,location=no")');

            browser.switchTo().window('second-window');
            browser.sleep(1000);
            game.joinGameName("ben");
            game.joinGame();
            browser.sleep(1000);
            tictactoe.cell8.click();
            browser.sleep(1000);
            expect(tictactoe.cell8.getText()).toBe('O');

            browser.switchTo().window(firstwindow);
            tictactoe.cell4.click();
            browser.sleep(1000);
            expect(tictactoe.cell4.getText()).toBe('X');

            browser.switchTo().window('second-window');
            tictactoe.cell2.click();
            browser.sleep(1000);
            expect(tictactoe.cell2.getText()).toBe('O');

            browser.switchTo().window(firstwindow);
            tictactoe.cell3.click();
            browser.sleep(1000);
            expect(tictactoe.cell3.getText()).toBe('X');

            browser.switchTo().window('second-window');
            tictactoe.cell5.click();
            browser.sleep(1000);
            expect(tictactoe.cell5.getText()).toBe('O');
            expect(tictactoe.result.getText()).toBe('You Win');

            browser.switchTo().window(firstwindow);
            expect(tictactoe.result.getText()).toBe('You lose');
            tictactoe.cell6.click();
            browser.sleep(1000);
            expect(tictactoe.cell6.getText()).toBe(' ');



          });
        });
      });




});

