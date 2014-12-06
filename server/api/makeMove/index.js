/**
 * Created by eyky on 6.12.2014.
 */
var express = require('express');
var controller = require('../command.controller');

module.exports = function(app){

  var router = express.Router();

  router.post('/', controller.executeCommand);

  return {
    router:router
  }

};
