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

	this.addProduct = function(name, description, price) {
		var deferred = $q.defer();
		$http({
			url: 'http://localhost:3000/products',
			method: 'POST',
			data: {
				"name": name,
				"description": description,
				"price": price
			}
		}).then(function(response) {
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}

	this.updateProduct = function(existing, newName, newDescription, newPrice) {
		var deferred = $q.defer();
		if (!newPrice) newPrice = existing.price;
		$http({
			url: 'http://localhost:3000/products/' + existing._id,
			method: 'PUT',
			data: {
				name: newName,
				description: newDescription,
				price: parseInt(newPrice)
			}
		}).then(function(response) {
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}

	this.deleteProduct = function(toDelete) {
		var deferred = $q.defer();
		$http({
			url: 'http://localhost:3000/products/' + toDelete._id,
			method: 'DELETE'
		}).then(function(response) {
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}
})
