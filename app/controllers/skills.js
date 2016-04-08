var skillsDemo = require('../seeds/skills')();

module.exports = function (app) {
  var controller = {};

  controller.getSkills = function (req,res) {
    res.json(skillsDemo);
  };

  return controller;
};
