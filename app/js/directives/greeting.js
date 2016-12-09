/**
 * Created by LSteffens on 12/9/2016.
 */
'use strict';
eventsApp
    .directive('greeting', function() {
        return {
            restrict: 'E',
            replace: true,
            template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
            controller: '@',
            name: 'kungFu'
        };
});

eventsApp.controller('GreetingController',
    function GreetingController($scope){
        $scope.sayHello = function () {
            alert('Hello');
        };
    });