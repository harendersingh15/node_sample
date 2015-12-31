angular.module('NodeExpress', [
	'ngRoute',
	'ngCookies'
	]);

angular
.module('NodeExpress')
.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: './views/default.html',
			controller : 'DefaultController',
			controllerAs : 'ctrl'
		})
		.when('/login', {
				templateUrl : './views/login.html',
				controller : 'LoginController',
				controllerAs : 'ctrl'
		})
		.when('/register', {
				templateUrl : './views/register.html',
				controller : 'RagisterController',
				controllerAs : 'ctrl'
		})
		.otherwise({redirectTo: '/'});
}]).run(['$rootScope', '$location', '$cookies', function($rootScope, $location, $cookies){
	$rootScope.$on('$routeChangeStart', function(event, next, current){
			if(!$cookies.token){
			$location.url() === '/register' 
			? $location.path('/register') : $location.path('/login');
		}
	})
	
}]);