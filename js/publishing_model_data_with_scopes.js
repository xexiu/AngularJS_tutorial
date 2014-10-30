var app = angular.module('app', []);
app.controller('CountController', function($scope){
  $scope.setCount = function(){
    $scope.count = 3;
  }
});
