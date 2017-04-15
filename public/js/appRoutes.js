angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // posts page

        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        })
        .when('/posts', {
            templateUrl: 'views/posts.html',
            controller: 'postsController'
        })

    $locationProvider.html5Mode(true);

}]);