/**
 * Created by Leo on 12/5/2016.
 */
'use strict'

eventsApp.controller('EventListController',
    function EventListController($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();
    }
);