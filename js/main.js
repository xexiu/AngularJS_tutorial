var myApp = angular.module('myApp', []);
myApp.factory('myData', function(){ // Inject this data into the two controllers created using the SERVICE 'factory'.
  return {message: 'I am data from a service'};
});

myApp.filter('reverse', function(myData) {
  return function(text){
    return text.split('').reverse().join('') + ' => ' + myData.message;
  };
});

function FirstController($scope, myData){
  // $scope.data = {message: 'Hello'}; // Try to delete 'hello' and add 'panel' or 'label' to see the effects
  $scope.data = myData;
}

function SecondController($scope, myData){
  // $scope.data = {message: 'Hello'}; // Try to delete 'hello' and add 'panel' or 'label' to see the effects
  $scope.data = myData;

  /* $scope.reversedMessage = function(message){
    return message.split('').reverse().join('');
  }; */
}

// Search filter provided by angular
myApp.factory('Avengers', function(){
  var Avengers = {};
  Avengers.cast = [
  {
    name: "Sergio",
    character: "capitan america"
  },
  {
    name: "Savia",
    character: "baby deep"
  },
  {
    name: "pedro",
    character: "thor"
  },
  {
    name: "steve",
    character: "apple"
  },
  {
    name: "bill gates",
    character: "windows"
  },
  {
    name: "nokia",
    character: 3310
  },
  {
    name: "apple",
    character: "iphone"
  }
  ];
  return Avengers;
});

function AvengersController($scope, Avengers){
  $scope.Avengers = Avengers;
}
