var css = angular.module('cssChange', []);
css.controller('MainCtrl', function($scope){
  $scope.collection = ['item1', 'item2', 'item3'];
  $scope.selectedIndex = 0; // -1 set the items to have no class applied

  $scope.itemClicked = function($index){
    console.log($index);
    $scope.selectedIndex = $index;
  };
});
