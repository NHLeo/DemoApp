/**
 * Created by LSteffens on 11/29/2016.
 */

'use strict';

eventsApp.factory('$exceptionHandler', function() {
    return function(exception) {
        console.log("Exception handled by our customer handler: " + exception.message);
    };
});