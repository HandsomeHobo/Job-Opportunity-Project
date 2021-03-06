//configure all routers
(function() {
angular.module('hitModule').config(function($routeProvider) {

	$routeProvider
	.when('/intro', {
		templateUrl : './pages/intro.html',
		controller : 'introController'

	})
	.when('/employer', {
		templateUrl : './pages/employer.html',
		controller : 'employerController'

	})
	.when('/login', {
		templateUrl : './pages/login.html',
		controller : 'loginController'

	})
	.when('/createUser', {
		templateUrl : './pages/createuser.html',
		controller : 'createUserController'

	})
	.when('/search', {
		templateUrl : './pages/search.html',
		controller : 'searchController'

	})

	.when('/', {
		templateUrl : './pages/intro.html',
		controller : 'introController'

	})
	
	//.otherwise({
	//	redirectTo : '/',
	//	templateUrl : './index.html'
	//});

});
})();