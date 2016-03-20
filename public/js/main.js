angular.module('textmmo',['ngRoute','ngResource']).config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'partials/status.html',
    controller: 'StatusController'
  });
});
