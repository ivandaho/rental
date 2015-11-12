app.factory('equipment', ['$http', function($http){
  return $http.get('json/equipment.json')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
}]);
         
