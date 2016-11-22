'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.snippet='<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle={color:'red'};
        $scope.myclass="blue";
        $scope.buttonDisabled=true;
        $scope.sortorder='name';

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2014',
            time: '11:30 am',
            location: {
                address: 'Google HQ',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass Introductory',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session, you will learn the ins and outs of directives.',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This session will take a close looks at scopes.  Learn a bunch of stuff about scopes.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything that Angular does.  In this session, you will learn a whole bunch about controllers.',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            if (session.upVoteCount > 0) {
                session.upVoteCount--;
            }
        };


    }
);