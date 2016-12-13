/**
 * Created by Leo on 11/10/2016.
 */
'use strict';

eventsApp.controller ('EditEventController',
    function EditEventController ($scope, eventData){
        $scope.saveEvent = function (event, newEventForm) {

            if (newEventForm.$valid) {
                eventData.save(event)
                    .$promise
                    .then(function(response) {
                        console.log('Edit Event Controller - success', response);})
                    .catch(function(response) {
                        console.log('Edit Event Controller - failure', response);}
                );
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        };
    }
);

/*
var DATE_REGEXP = "/\d\d/\d\d/\d\d\d\d/";
eventsApp.directive('dirEventDate', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.dirEventDate = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }

                if (DATE_REGEXP.test(viewValue)) {
                    var incomingDate = new Date(viewValue);
                    var currentDate = new Date();
                    if (incomingDate > currentDate) {
                        // it is valid
                        return true;
                    }
                }

                // it is invalid
                return false;
            };
        }
    };
});
*/
