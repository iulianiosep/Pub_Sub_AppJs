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
                        },
                        {
                            id: 'P4',
                            company : 'Google',
                            value : {
                                value : 75.318735
                            },
                            variation : {
                                value : 68.668722
                            },
                            date : '2016.03.01'
                        },
                        {
                            id: 'P5',
                            company : 'Zapp',
                            value : {
                                value : 68.318735
                            },
                            variation : {
                                value : 64.668722
                            },
                            date : '2016.02.04'
                        },
                        {
                            id: 'P6',
                            company : 'Orange',
                            value : {
                                value : 38.654789
                            },
                            variation : {
                                value : 64.668722
                            },
                            date : '2018.06.14'
                        },
                        {
                            id: 'P7',
                            company : 'Vodafone',
                            value : {
                                value : 78.963254
                            },
                            variation : {
                                value : 82.963213
                            },
                            date : '2019.01.24'
                        },
                        {
                            id: 'P8',
                            company : 'Mercedes',
                            value : {
                                value : 98.212365
                            },
                            variation : {
                                value : 25.552634
                            },
                            date : '2012.02.09'
                        },
                        {
                            id: 'P9',
                            company : 'Google',
                            value : {
                                value : 38.658565
                            },
                            variation : {
                                value : 28.112233
                            },
                            date : '2017.01.01'
                        },
                        {
                            id: 'P10',
                            company : 'Zapp',
                            value : {
                                value : 38.659823
                            },
                            variation : {
                                value : 85.632541
                            },
                            date : '2013.12.11'
                        },
                        {
                            id: 'P11',
                            company : 'Orange',
                            value : {
                                value : 28.212365
                            },
                            variation : {
                                value : 65.552634
                            },
                            date : '2019.02.01'
                        },
                        {
                            id: 'P12',
                            company : 'Volkswagen',
                            value : {
                                value : 68.111658
                            },
                            variation : {
                                value : 48.659321
                            },
                            date : '2016.01.09'
                        },
                        {
                            id: 'P13',
                            company : 'Microsoft',
                            value : {
                                value : 78.313695
                            },
                            variation : {
                                value : 45.654712
                            },
                            date : '2013.07.11'
                        },
                        {
                            id: 'P14',
                            company : 'Zapp',
                            value : {
                                value : 96.369742
                            },
                            variation : {
                                value : 45.963548
                            },
                            date : '2011.06.21'
                        },
                        {
                            id: 'P15',
                            company : 'Orange',
                            value : {
                                value : 14.292365
                            },
                            variation : {
                                value : 96.532634
                            },
                            date : '2012.02.09'
                        },
                        {
                            id: 'P16',
                            company : 'Microsoft',
                            value : {
                                value : 48.963451
                            },
                            variation : {
                                value : 45.654931
                            },
                            date : '2015.12.19'
                        },
                        {
                            id: 'P17',
                            company : 'Telekom',
                            value : {
                                value : 88.265415
                            },
                            variation : {
                                value : 25.818165
                            },
                            date : '2012.11.14'
                        },
                        {
                            id: 'P18',
                            company : 'Mercedes',
                            value : {
                                value : 78.212461
                            },
                            variation : {
                                value : 75.253631
                            },
                            date : '2019.12.01'
                        },
                        {
                            id: 'P19',
                            company : 'Mercedes',
                            value : {
                                value : 47.211165
                            },
                            variation : {
                                value : 35.559534
                            },
                            date : '2012.02.09'
                        },
                        {
                            id: 'P20',
                            company : 'Cosmote',
                            value : {
                                value : 98.000368
                            },
                            variation : {
                                value : 65.653277
                            },
                            date : '2016.06.10'
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