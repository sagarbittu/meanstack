var app = angular.module('contactlist', ['ngRoute', 'controller.module']);

app.config(function($routeProvider, $locationProvider) {

	$routeProvider
	
		.when('/', {
			controller : 'mainCtrl',
			templateUrl : 'views/main.html'
		})

})

app.run();