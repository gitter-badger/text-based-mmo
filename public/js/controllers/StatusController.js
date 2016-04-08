angular.module('textmmo').controller('StatusController', function($scope,$resource){

  var CharStatus = $resource('/status');
  $scope.char = {};

  CharStatus.get(function (status) {
    $scope.char = status;
  }, function(erro){
    console.log(erro);
  });

  $scope.getLifePercentage = function () {
    var percentage = ($scope.char.hp/$scope.char.max_hp) * 100;

    return percentage;
  };

});
