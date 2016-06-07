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
    socket.emit('new_subscription', $scope.subscriptions[1]);

    sub =
      $scope.subscriptions[1].company +
      $scope.subscriptions[1].value.symbol +
      $scope.subscriptions[1].value.valueAction;

      $log.info('listener', sub);
      socket.on(sub, function (matchPub) {
        $log.info('Catch', matchPub);
        var match = {};
        match.sub = sub;
        match.pub = matchPub;
        
        $scope.matchPublication.push(match);
        $scope.$apply();
      });
}]);