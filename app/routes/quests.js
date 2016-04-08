module.exports = function(app){

  var controller = app.controllers.quests;

  app.route('/api/quests')
    .get(controller.getQuests);
};
