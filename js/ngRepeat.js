var repeat = angular.module('ngRepeat', []);
function StudentListController($scope) {
  var students =[
  {name:'Mary Contrary', id:'1'},
  {name:'Jack Sprat', id:'2'},
  {name:'Jill Hill', id:'3'}
  ];
  $scope.students = students;
  $scope.insertTom = function() {
    $scope.students.splice(1, 0, {name:'Tom Thumb', id:'4'});
    // return console.log('hi');
  };
}

function AlbumController($scope) {
  var album = [
  {name:'Southwest Serenade', duration: '2:34'},
  {name:'Northern Light Waltz', duration: '3:21'},
  {name:'Eastern Tango', duration: '17:45'}
  ];
  $scope.album = album;
}
