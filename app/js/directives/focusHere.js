'use strict';

eventsApp.directive('focusHere', function($compile){
   return {
       restrict: 'A',
       link: function (scope, element, attrs, controller) {
           element.focus();
/*           angular.element(element).html($compile(markup)(scope)); */
       }
   };
});