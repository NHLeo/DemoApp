/**
 * Created by Leo on 12/6/2016.
 */
eventsApp.controller('MainMenuController',
    function ($scope, $location) {
        $scope.createEvent = function () {
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
            $location.replace();   // replace the current page with this page (switches view and doesn't add to the history
            $location.url('/newEvent');
    };
});