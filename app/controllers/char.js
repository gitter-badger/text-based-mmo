var charDemo = require('../seeds/char.js')();
var skillsDemo = require('../seeds/skills')();


module.exports = function (app) {
  var controller = {};

  controller.getStatus = function (req,res) {
    res.json(charDemo);
  };

  controller.getInventory = function (req,res) {

  };

  controller.getSkills = function (req,res) {
    res.json(skillsDemo);
  };

  return controller;
};
