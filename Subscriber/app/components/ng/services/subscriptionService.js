/**
 * Created by Catalin on 06.06.2016.
 */
angular.module('SubscriberApp')
  .factory('connectService',[
    '$http',
    function (
      $http
    ) {
      'use strict';

      var
        service,
        _putSubscription = function (pub) {
          return $http.post('http://localhost:3000/subscriber/subscription/', pub);
        },
        _getSubscriptions = function () {
          return [
            {
              id: 'S1',
              company : 'SwissArmy',
              value : {
                symbol : '>=',
                value :  72.368542
              },
              variation : {
                symbol: '=',
                value : 81.853694
              },
              date : '2011.11.04'
            },
            {
              id: 'S2',
              company : 'Mercedes',
              value : {
                symbol : '>',
                value : 80.560167
              }
            },
            {
              id: 'S3',
              
              variation : {
                symbol: '=',
                value : 64.668722
              },
              date : '2016.02.04'
            }
          ];
        };

      service = {
        saveSubscription : _putSubscription,
        getSubscriptions : _getSubscriptions
      };

      return service;
    }
  ]);