var hideShow = angular.module('hideShow', []);
hideShow.controller('DeathrayMenuController', function($scope){
  $scope.menuState = false;
  $scope.toggleMenu = function() {
    $scope.menuState = !$scope.menuState; // true
    // return console.log('hi');
    scope: {
      index: '@'
    }
  };

  $scope.stun = function(){
    return console.log('stun');
  };

  $scope.disintegrate = function(){
    return console.log('disintegrate');
  };

  $scope.erase = function(){
    console.log($scope);
  };
});
