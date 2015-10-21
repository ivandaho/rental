app.directive('cameraInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: './js/directives/cameraInfo.html' 
  }; 
});
