angular.module('textmmo').controller('StatusController', function($scope,$resource){

  var CharStatus = $resource('/status');
  $scope.char = {};

  CharStatus.get(function (status) {
    $scope.char = status;
  }, function(erro){
    console.log(erro);
  });

});
