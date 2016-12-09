'use strict';

/*var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource', 'ngCookies'])*/
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'ngSanitize', 'ngCookies'])
    // The config block is run when the application is being bootstrapped by Angular
    .config (function($routeProvider, $locationProvider) {
        $routeProvider.when('/directiveControllerSample',
            {
                templateUrl:'templates/DirectiveControllerSample.html',
            });
        $routeProvider.when('/sampleDirective',
            {
                templateUrl:'templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            });
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController',
                resolve: {
                    events: function ($route, eventData) {
                        return eventData.getAllEvents().$promise;
                    }
                }
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function ($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider.when('/editProfile',
            {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController'
            });
        $routeProvider.when ('/about',
            {
                template: '<h1>Site Version</h1></br><h3>1.0.0</h3>'
            }
        );
        $routeProvider.otherwise({redirectTo: '/events'});
        $locationProvider.html5Mode(true);
    })
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3})
    });
