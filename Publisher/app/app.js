'use strict';

// Declare app level module which depends on views, and components
angular.module('PublisherApp', [
  'ngRoute',
  'PublisherApp.view1',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
