app.controller('AdminController', function($scope, mainService) {
	$scope.getProducts = function() {
		mainService.getProducts().then(function(results) {
			$scope.products = results;
		})
	}();

	$scope.addProduct = function() {
		mainService.addProduct($scope.newName, $scope.newPrice)
		.then(function(results) {
			var productName = results.name;
			mainService.getProducts().then(function(results) {
					$scope.products = results;
			alert("You have successfully added: " + productName);
			})
		})
	}

	$scope.updateProduct = function() {
		mainService.updateProduct($scope.existingProduct, $scope.updateName, $scope.updatePrice)
		.then(function(results) {
			if (results.nModified === 1) {
				mainService.getProducts().then(function(results) {
					$scope.products = results;
				alert("You have successfully updated: " + $scope.existingProduct.name);
				})
			}
		})
	}

	$scope.deleteProduct = function() {
		mainService.deleteProduct($scope.deletedProduct).then(function(result) {
			if (result.n === 1) {
				mainService.getProducts().then(function(results) {
					$scope.products = results;
				});
				alert("You have successfully deleted the product");
			}
		})
	}
})