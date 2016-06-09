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
            },
            {
              id: 'S4',
              
              variation : {
                symbol: '>=',
                value : 92.654852
              },
              date : '2015.03.02'
            },
            {
              id: 'S5',
              
              variation : {
                symbol: '>',
                value : 45.156745
              },
              date : '2017.04.02'
            },
            {
              id: 'S6',
              
              variation : {
                symbol: '<',
                value : 15.722668
              },
              date : '2016.02.04'
            },
            {
              id: 'S7',
              
              variation : {
                symbol: '<',
                value : 37.357418
              },
              date : '2016.05.14'
            },
            {
              id: 'S8',
              
              variation : {
                symbol: '<',
                value : 27.324568
              },
              date : '2016.01.26'
            },
            {
              id: 'S9',
              
              variation : {
                symbol: '<',
                value : 37.357418
              },
              date : '2016.05.14'
            },
            {
              id: 'S10',
              
              variation : {
                symbol: '>',
                value : 75.326985
              },
              date : '2019.10.20'
            },
            {
              id: 'S11',
              
              variation : {
                symbol: '<',
                value : 48.987456
              },
              date : '2012.03.02'
            },
            {
              id: 'S12',
              
              variation : {
                symbol: '=',
                value : 67.112233
              },
              date : '2018.12.20'
            },
            {
              id: 'S13',
              
              variation : {
                symbol: '=',
                value : 80.326188
              },
              date : '2016.03.30'
            },
            {
              id: 'S15',
              
              variation : {
                symbol: '>',
                value : 72.652971
              },
              date : '2019.07.21'
            },
            {
              id: 'S16',
              
              variation : {
                symbol: '=',
                value : 63.963258
              },
              date : '2017.05.04'
            },
            {
              id: 'S17',
              
              variation : {
                symbol: '<',
                value : 57.357419
              },
              date : '2016.12.17'
            },
            {
              id: 'S18',
              
              variation : {
                symbol: '<',
                value : 17.951478
              },
              date : '2015.07.14'
            },
            {
              id: 'S19',
              
              variation : {
                symbol: '=',
                value : 37.357418
              },
              date : '2016.05.14'
            },
            {
              id: 'S20',
              
              variation : {
                symbol: '<',
                value : 87.357418
              },
              date : '2011.07.10'
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