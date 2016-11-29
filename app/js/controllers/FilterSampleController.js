/**
 * Created by LSteffens on 11/29/2016.
 */
'use strict'

eventsApp.controller('FilterSampleController',
    function FilterSampleController($scope, $filter, durationsFilter) {
        $scope.data = {};

        var durations = $filter('durations');

        $scope.data.duration1 = durations(1);
        $scope.data.duration2 = durations(2);
        $scope.data.duration3 = durations(3);
        $scope.data.duration4 = durations(4);

        /* you can also inject the filter directly (filtername + "Filter") \
           this lets you access the filter data without injecting the $filter service
         */

        $scope.data.duration1_direct = durationsFilter(1);
        $scope.data.duration2_direct = durationsFilter(2);
        $scope.data.duration3_direct = durationsFilter(3);
        $scope.data.duration4_direct = durationsFilter(4);

    }


);