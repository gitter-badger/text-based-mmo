angular.module('textmmo').controller('QuestsController', function($scope,$resource){
  var Quests = $resource('/quests');

  $scope.quests = [];

  Quests.query({},function (quests) {
    $scope.quests = quests;
  }, function(erro){
    console.log(erro);
  });

});
