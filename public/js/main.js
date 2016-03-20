angular.module('textmmo',['ngRoute','ngResource']).config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'partials/status.html',
    controller: 'StatusController'
  });

  $routeProvider.when('/status',{
    templateUrl: 'partials/status.html',
    controller: 'StatusController'
  });

  $routeProvider.when('/inventory',{
    templateUrl: 'partials/inventory.html',
    controller: 'InventoryController'
  });

  $routeProvider.when('/skills',{
    templateUrl: 'partials/skills.html',
    controller: 'SkillsController'
  });

});
