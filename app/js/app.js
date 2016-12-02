'use strict';

/*var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource', 'ngCookies'])*/
var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource', 'ngCookies'])
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3})
    });
