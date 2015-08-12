app.controller('MainController', function($scope, mainService) {
	$scope.getProducts = function() {
		mainService.getProducts().then(function(results) {
			$scope.products = results;
		})
	}();
})