angular.module('textmmo').controller('QuestsController', function($scope,$resource){
  var Quests = $resource('/api/quests');

  $scope.quests = [];

  Quests.query({},function (quests) {
    $scope.quests = quests;
  }, function(erro){
    console.log(erro);
  });

});
