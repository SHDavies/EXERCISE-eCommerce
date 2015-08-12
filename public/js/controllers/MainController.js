app.controller('MainController', function($scope, mainService) {
	$scope.getProducts = function() {
		mainService.getProducts().then(function(results) {
			$scope.products = results;
		})
	}();

	$scope.cart = [];

	$scope.addToCart = function(index) {
		$scope.cart.push($scope.products[index]);
	}

	$scope.removeFromCart = function(index) {
		$scope.cart.splice(index, 1);
	}
})
