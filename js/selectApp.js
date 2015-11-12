storeApp.directive('selectApp', function() { 
  return { 
    restrict: 'E', 
    scope: {},
    templateUrl: 'js/selectApp.html',
    link: function(scope, element, attrs) {
	    	scope.buttonText = "Select",
	    	scope.selected = false,
	    	scope.buttontype = "active",
            scope.newvar = "newvar default value",
	    	
	    	scope.select = function() {
		    	element.toggleClass('btn-active');
		    	if(scope.selected) {
                    scope.buttontype = "active";
			    	scope.buttonText = "Select";
			    	scope.selected = false;
		    	} else {
                    scope.buttontype = "success";
                    scope.buttonText = "Deselect";
                    scope.selected = true; 
			    }
    	}
    }
  };
});
