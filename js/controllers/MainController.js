app.controller('MainController', ['$scope', 'equipment', function($scope, equipment) {
  equipment.success(function(data) { 
     $scope.data = data;
	  });
  $scope.testvar = 0;
}]);
