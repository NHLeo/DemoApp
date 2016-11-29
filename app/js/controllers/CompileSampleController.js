/**
 * Created by LSteffens on 11/29/2016.
 */
'use strict'

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse) {

        var fn = $parse('1 + 2 * 3');
        console.log ("Look at me logging my parse stuff: " + fn());

        var getter = $parse('event.name');

        var context1 = { event: {name:'Angular JS Boot Camp'}};
        var context2 = { event: {name:'Code Camp'}};

        console.log("Event name from getter: " + getter(context1));
        console.log("Event name from getter: " + getter(context2));
        $scope.appendDivToElement = function (markup) {
            return $compile(markup) ($scope).appendTo(angular.element("#appendHere"));
        }


    }


);