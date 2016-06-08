/*global angular*/
angular.module('SubscriberApp')
  .directive('matchSubscriptions',[
    '$log',
    function (
      $log
    ) {
      'use strict';

      return {
        restrict: 'E',
        scope: {
          match: '='
        },
        templateUrl:'components/templates/match_subscriptions.html',
        link: function ($scope, $elem, $attrs, $ctrl) {
          angular.noop($scope, $elem, $attrs, $ctrl);
        
          $scope.$watch('match', function (newVal) {
            $log.info('WATCH', newVal);
            
            $scope.publications = newVal;
          },true);
        
        }
      };
    }
  ]);