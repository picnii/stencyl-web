angular.module('web', []).
	config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		  when('/', {templateUrl: 'pages/first.html', controller: HomeController}).
		  when('/detail', {templateUrl: 'pages/home.html', controller: DetailController}).
		  when('/why', {templateUrl: 'pages/why.html', controller: WhyController}).
		  when('/contact', {templateUrl: 'pages/contact.html', controller: ContactController}).
	      otherwise({redirectTo: '/'});
	}]);