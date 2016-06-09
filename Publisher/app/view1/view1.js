'use strict';

angular.module('PublisherApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [
    '$scope',
    'connectService',
    'socket',
  function(
      $scope,
      connectService,
      socket
  ) {
    'use strict';

    $scope.publications = connectService.getPublicatons();
    //connectService.savePublication($scope.publications[1]);

    socket.emit('new_publication', $scope.publications[0]);
    socket.emit('new_publication', $scope.publications[1]);
    socket.emit('new_publication', $scope.publications[2]);
    
    
    $scope.add = function () {
      var pub = {
        id : 1,
        company: 'x',
        value: 2000,
        variation: 100
      };
      connectService.savePublication(pub);
    }
}]);