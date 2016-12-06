'use strict';

/*var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource', 'ngCookies'])*/
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'ngSanitize'])
    // The config block is run when the application is being bootstrapped by Angular
    .config (function($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController'
            });
        $routeProvider.otherwise({redirectTo: '/events'});
    })
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3})
    });
