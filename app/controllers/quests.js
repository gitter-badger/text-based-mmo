var quests = require('../seeds/questList')();

module.exports = function(app){
  var controller = {};

  controller.getQuests = function(req,res){
    res.json(quests);
  };

  return controller;
};
