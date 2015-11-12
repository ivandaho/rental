app.directive('micInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: './js/directives/micInfo.html' 
  }; 
});
