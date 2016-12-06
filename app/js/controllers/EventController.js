'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $anchorScroll, $routeParams){
        $scope.snippet='<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle={color:'red'};
        $scope.myclass="blue";
        $scope.buttonDisabled=true;
        $scope.sortorder='name';

        eventData.getEvent($routeParams.eventId)
            .$promise
                .then(function (event) {$scope.event = event; console.log(event);})
                .catch(function (response) {console.log(response);}
        );
        /* This is used when we used $http to get the event data
        eventData.getEvent()
            .success(function(event) {$scope.event = event;})
            .error(function(data, status, headers, config) {
                $log.warn("HTTP GET returned an error.  Details to follow:");
                $log.warn(data, status, headers, config);
            });
        */

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            if (session.upVoteCount > 0) {
                session.upVoteCount--;
            }
        };

        $scope.scrollToSession = function () {
            $anchorScroll();
        };


    }
);