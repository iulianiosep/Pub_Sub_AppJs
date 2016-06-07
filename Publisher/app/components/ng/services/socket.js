/**
 * Created by Catalin on 06.06.2016.
 */
angular.module('PublisherApp')
   .factory('socket', [

       function (

       ) {
           
           var socket = io.connect('http://localhost:3000');
         
           return socket;
       }
   ]);