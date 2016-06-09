/**
 * Created by Catalin on 06.06.2016.
 */
/**
 * Created by Catalin on 06.06.2016.
 */
angular.module('SubscriberApp')
  .factory('socket', [

    function (

    ) {

      var socket = io.connect('X');

      return socket;
    }
  ]);