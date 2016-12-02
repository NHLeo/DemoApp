'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $anchorScroll, $cookieStore){
        $scope.snippet='<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle={color:'red'};
        $scope.myclass="blue";
        $scope.buttonDisabled=true;
        $scope.sortorder='name';

        $cookieStore.put ('sessionVotes', {sessions: []});

        eventData.getEvent()
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


        $scope.userHasVotedOnSession = function (session) {
            var sessionVotes = $cookieStore.get('sessionVotes');
            var hasVoted = false;

            var arrayLen = sessionVotes.sessions.length;
            for (var i = 0; i < arrayLen; i++) {
                if (sessionVotes.sessions[i] == session.id) {
                    hasVoted = true;
                }
            }

            console.log("votes: " + sessionVotes.sessions);
            console.log ("Session id: " + session.id  + " has voted = " + hasVoted);

            return hasVoted;
        }

        $scope.userHasNotVotedOnSession = function (session) {
            return !($scope.userHasVotedOnSession(session));
        }


        $scope.upVoteSession = function(session) {
            if ($scope.userHasNotVotedOnSession(session)) {
                session.upVoteCount++;

                var sessionVotes = $cookieStore.get('sessionVotes');
                sessionVotes.sessions.push(session.id);
                $cookieStore.put ('sessionVotes', sessionVotes);


            }
        };

        $scope.downVoteSession = function(session) {
            if ($scope.userHasNotVotedOnSession(session)) {
                if (session.upVoteCount > 0) {
                    session.upVoteCount--;

                    var sessionVotes = $cookieStore.get('sessionVotes');
                    sessionVotes.sessions.push(session.id);
                    $cookieStore.put ('sessionVotes', sessionVotes);


                }
            }
        };

        $scope.scrollToSession = function () {
            $anchorScroll();
        };


    }
);