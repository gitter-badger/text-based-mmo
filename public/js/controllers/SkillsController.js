angular.module('textmmo').controller('SkillsController', function($scope,$resource,$document){
  var Skills = $resource('/api/skills');
  $scope.skills = {
    close: [],
    long: []
  };

  Skills.query({},function (skills) {

    $scope.skills.close = skills.filter(function (skill) {
      if (skill.type === 'close'){
        return true;
      }
      return false;
    });

    $scope.skills.long = skills.filter(function (skill) {
      if (skill.type === 'long'){
        return true;
      }
      return false;
    });
  },function (erro) {
    console.log(erro);
  });

  $scope.getList = function () {
    if ($scope.tab === 1){
      return $scope.skills.close;
    } else {
      return $scope.skills.long;
    }
  };

});
