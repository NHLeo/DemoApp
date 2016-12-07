/**
 * Created by Leo on 12/6/2016.
 */
eventsApp.controller('MainMenuController',
    function ($scope, $location) {

        console.log('------------- location data -------------------');
        console.log('absUrl: ', $location.absUrl());
        console.log('protocol: ', $location.protocol());
        console.log('port: ', $location.port());
        console.log('host: ', $location.host());
        console.log('path: ', $location.path());
        console.log('search: ', $location.search());
        console.log('hash: ', $location.hash());
        console.log('url: ', $location.url());
        console.log('------------------------------------------------');

        $scope.createEvent = function () {
            $location.replace();   // replace the current page with this page (switches view and doesn't add to the history
            $location.url('/newEvent');
        };

        $scope.editProfile = function () {
            $location.replace();   // replace the current page with this page (switches view and doesn't add to the history
            $location.url('/editProfile');
        };

        $scope.goHome = function () {
            $location.replace();   // replace the current page with this page (switches view and doesn't add to the history
            $location.url('/events');
        };

        $scope.showAbout = function () {
            $location.replace();   // replace the current page with this page (switches view and doesn't add to the history
            $location.url('/about');
        };


    });