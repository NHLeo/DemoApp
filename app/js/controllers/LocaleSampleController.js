/**
 * Created by LSteffens on 11/29/2016.
 */
'use strict'

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController($scope, $locale) {

        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

        throw {message: "Now is the time for all good men to come to the aid of their country"};

    }


);