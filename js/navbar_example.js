var nav = angular.module('Navbar', []);
nav.controller('NavController', function($scope){
  $scope.doSomething = function(){
    return console.log('1st click');
  };
});
nav.controller('ContentAreaController', function($scope){
  $scope.doSomething = function(){
    return console.log('2nd click');
  };
});
