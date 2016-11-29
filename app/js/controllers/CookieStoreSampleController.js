/**
 * Created by LSteffens on 11/29/2016.
 */
'use strict'

eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope, $cookieStore) {

        $scope.event = {id:1, name:"My Event For Testing Cookies"};

        $scope.saveEventToCookie = function (event) {
            $cookieStore.put ('event', event);
        };

        $scope.getEventFromCookie = function () {
            console.log($cookieStore.get('event'));
        };

        $scope.removeEventCookie = function () {
            $cookieStore.remove ('event');
        };


    }


);