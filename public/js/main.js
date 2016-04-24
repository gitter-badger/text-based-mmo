angular.module('textmmo',['ngRoute','ngResource','ngSanitize']).config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'partials/status.html',
    controller: 'StatusController'
  })
  .when('/status',{
    templateUrl: 'partials/status.html',
    controller: 'StatusController'
  })
  .when('/inventory',{
    templateUrl: 'partials/inventory.html',
    controller: 'InventoryController'
  })
  .when('/skills',{
    templateUrl: 'partials/skills.html',
    controller: 'SkillsController'
  })
  .when('/quests',{
    templateUrl: 'partials/quests.html',
    controller: 'QuestsController'
  })
  .when('/maps/current',{
    templateUrl: 'partials/current-map.html',
    controller: 'CurrentMapController'
  });
});
