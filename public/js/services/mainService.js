app.service('mainService', function($http, $q) {
	this.getProducts = function() {
		var deferred = $q.defer();
		$http({
			url: 'http://localhost:3000/products',
			method: 'GET'
		}).then(function(response) {
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}

	this.addProduct = function(name, price) {
		var deferred = $q.defer();
		$http({
			url: 'http://localhost:3000/products',
			method: 'POST',
			data: {
				"name": name,
				"price": price
			}
		}).then(function(response) {
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}

	this.updateProduct = function(existing, newName, newPrice) {
		var deferred = $q.defer();
		$http({
			url: 'http://localhost:3000/products?name=' + existing.name,
			method: 'PUT',
			data: {
				name: newName,
				price: newPrice
			}
		}).then(function(response) {
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}

	this.deleteProduct = function(toDelete) {
		var deferred = $q.defer();
		$http({
			url: 'http://localhost:3000/products?name=' + toDelete.name,
			method: 'DELETE'
		}).then(function(response) {
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}
})