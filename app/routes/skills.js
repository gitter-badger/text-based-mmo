module.exports = function(app){
  var controller = app.controllers.skills;

  app.route('/api/skills')
    .get(controller.getSkills);
};
