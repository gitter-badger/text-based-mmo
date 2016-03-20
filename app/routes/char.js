module.exports = function (app){
  var controller = app.controllers.char;

  app.route('/status')
    .get(controller.getStatus);

  app.route('/inventory')
    .get(controller.getInventory);

  app.route('/skills')
    .get(controller.getStatus);
};
