/**
 * Created by Leo on 11/10/2016.
 */
'use strict';

eventsApp.controller ('EditEventController',
    function EditEventController ($scope){
        $scope.saveEvent = function (event, newEventForm) {
            console.log(newEventForm);
            if (newEventForm.$valid) {
                window.alert('event ' + event.name + ' saved!');
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        };
    }
);
