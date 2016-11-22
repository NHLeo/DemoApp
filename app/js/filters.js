'use strict';

eventsApp.filter('durations', function() {
    return function (duration) {
        var durStr = "Unknown";
        switch (duration) {
            case 1:
                durStr = "Half Hour";
                break;
            case 2:
                durStr = "1 Hour";
                break;
            case 3:
                durStr = "Half Day";
                break;
            case 4:
                durStr = "Full Day";
                break;
        }
        return durStr;
    }
});