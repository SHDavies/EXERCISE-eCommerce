var app = angular.module('ecommerceApp', ['ngRoute']);

app.config(['$routeProvider',function(router) {
	router
		.when('/', {
			templateUrl: './views/main.html',
			controller: 'MainController'
		})
		.when('/admin', {
			templateUrl: './views/admin.html',
			controller: 'AdminController'
		})
		.otherwise({
			redirectTo: '/'
		})
	
}])