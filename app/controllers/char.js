var charDemo = require('../seeds/char.js')();


module.exports = function(app){
  var controller = {};

  controller.getStatus = function (req,res) {
    res.json(charDemo);
  };

  controller.getInventory = function (req,res) {

  };

  controller.getSkills = function (req,res) {

  };

  return controller;
};
