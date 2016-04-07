module.exports = function(app){

  var controller = app.controllers.quests;

  app.route('/quests')
    .get(controller.getQuests);
};
