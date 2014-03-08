'use strict';


// Declare app level module which depends on filters, and services
angular.module('myMeanApp', ['ngResource', 'ngRoute']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {templateUrl: 'partials/list', controller: 'ListController'});
  $routeProvider.when('/new', {templateUrl: 'partials/new', controller: 'NewController'});
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
