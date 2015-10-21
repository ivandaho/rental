app.directive('selectApp', function() { 
  return { 
    restrict: 'E', 
    scope: {},
    templateUrl: 'js/directives/selectApp.html',
    link: function(scope, element, attrs) {
	    	scope.buttonText = "Select",
	    	scope.selected = false,
	    	
	    	scope.select = function() {
		    	element.toggleClass('btn-active');
		    	if(scope.selected) {
                    $('.jumbotron').css('background-image', 'url("../img/bg_musicgear.jpg")');
			    	scope.buttonText = "Select";
			    	scope.selected = false;
		    	} else {
                        $('.jumbotron').css('background-image', 'none');
				    	scope.buttonText = "Deselect";
				    	scope.selected = true; 
			    }
    	}
    }
  };
});
