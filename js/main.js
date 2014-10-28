var myApp = angular.module('myApp', []);
myApp.factory('myData', function(){ // Inject this data into the two controllers created using the SERVICE 'factory'.
  return {message: 'I am data from a service'};
});

function FirstController($scope, myData){
  // $scope.data = {message: 'Hello'}; // Try to delete 'hello' and add 'panel' or 'label' to see the effects
  $scope.data = myData;
}

function SecondController($scope, myData){
  // $scope.data = {message: 'Hello'}; // Try to delete 'hello' and add 'panel' or 'label' to see the effects
  $scope.data = myData;

  $scope.reversedMessage = function(message){
    return message.split('').reverse().join('');
  };
}
