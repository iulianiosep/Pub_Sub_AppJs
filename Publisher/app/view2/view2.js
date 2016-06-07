'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [
    'socket',
    '$scope',
    'connectToServer',
    '$log',
  function(
      socket,
      $scope,
      connectToServer,
      $log
  ) {
    //console.log('CTRL', socket);
    //var publicationPromise = connectToServer.savePublication({data: 'BRALALLLAA'});
}]);