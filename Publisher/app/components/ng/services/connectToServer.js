/**
 * Created by Catalin on 06.06.2016.
 */
angular.module('PublisherApp')
    .factory('connectService',[
        '$http',
        function (
            $http
        ) {
            'use strict';

            var
                service,
                _putPublication = function (pub) {
                    return $http.post('http://localhost:3000/publisher/publication/', pub);
                },
                _getPublicatons = function () {
                    return [
                        {
                            id: 'P1',
                            company : 'SwissArmy',
                            value : {
                                value :  82.368542
                            },
                            variation : {
                                value : 79.853694
                            },
                            date : '2011.11.04'
                        },
                        {
                            id: 'P2',
                            company : 'Mercedes',
                            value : {
                                value : 90.560167
                            },
                            variation : {
                                value : 82.796716
                            },
                            date : '2010.12.04'
                        },
                        {
                            id: 'P3',
                            company : 'Cosmote',
                            value : {
                                value : 68.318735
                            },
                            variation : {
                                value : 64.668722
                            },
                            date : '2016.02.04'
                        }
                    ];
                };

            service = {
                savePublication : _putPublication,
                getPublicatons : _getPublicatons
            };

            return service;
        }
    ]);