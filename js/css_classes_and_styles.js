var dr = angular.module('dr', []);
dr.controller('DeathrayMenuController', function($scope){
  $scope.isDisabled = false;
  $scope.stun = function(){
    // stun the target, then disable menu to allow regeneration
    $scope.isDisabled = true;
  }
});

// Warning and Error
dr.controller('HeaderController', function($scope){
  $scope.isWarning = false;
  $scope.isError = false;

  $scope.showError = function(){
    $scope.messageText = "This is an error";
    $scope.isError = true;
    $scope.isWarning = false;
  }

  $scope.showWarning = function(){
    $scope.messageText = "Just a warning, keep on";
    $scope.isError = false;
    $scope.isWarning = true;
  }
});

// Highlight table
dr.controller('RestaurantTableController', function($scope){
  $scope.directory = [
  {
    name:'The Handsome Heifer',
    cuisine:'BBQ'
  },
  {
    name:'Greens Green Greens',
    cuisine:'Salads'
  },
  {
    name:'House of Fine Fish',
    cuisine:'Seafood'
  }
  ];

  $scope.selectRestaurant = function(row){
    $scope.selectedRow = 'row';
  }
});
