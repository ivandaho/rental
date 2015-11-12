storeApp.directive('itemInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/itemInfo.html' 
  }; 
});
