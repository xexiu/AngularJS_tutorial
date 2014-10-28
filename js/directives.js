var app = angular.module('app', []);
app.directive('clock', function(){ // Target component
  return {
    restrict: 'E',
    scope: {
      timezone: '@', // @ ---> elements as a STRING
    },
    template: '<div>12:00pm {{timezone}}</div>'
  };
});

app.directive('panel', function(){ // Target panel
  return {
    restrict: 'E',
    transclude: true, // Using transclude to drop here the content inside 'panel'
    scope: {
      title: '@', // @ ---> element as a STRING
    },
    template: '<div style="border: 3px solid black">' +
    '<div class="alert-box">{{title}}</div>' +
    '<div ng-transclude></div>' + // The transclude copies the content inside the 'panel'. --> <clock timezone='PST'></clock>
    '</div>'
  };
});
