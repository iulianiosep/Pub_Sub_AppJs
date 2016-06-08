'use strict';

angular.module('SubscriberApp.view1', ['ngRoute'])

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
  '$log',
  function(
    $scope,
    connectService,
    socket,
    $log
  ) {
    'use strict';

    var sub;

    $scope.matchPublication = [];
    $scope.subscriptions = connectService.getSubscriptions();
    socket.emit('new_subscription', $scope.subscriptions[2]);

    sub =
      $scope.subscriptions[2].company || ''+
      $scope.subscriptions[2].variation.symbol +
      $scope.subscriptions[2].variation.value;

      $log.info('listener', sub);
      socket.on(sub, function (match) {
        $log.info('Catch', match);
        var matching = {}, exist;
        matching.sub = match.sub;
        matching.pub = match.pub;

        exist = _.find($scope.matchPublication, function (obj) {
          return obj.pub.id === matching.pub.id;
        });

        if (!exist) {
          $scope.matchPublication.push(matching);
          $scope.$apply();
        }
      });
}]);