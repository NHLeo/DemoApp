'use strict';

eventsApp.directive('enterSave', function(){
   return {
       restrict: 'A',

       link: function (scope, element, attrs, controller){
            element.on('keydown', function (event) {
                if (isEnterKeycode(event.keyCode))
                {
                    // enter was pressed, now find the submit element and "click" it
                    var elem = document.getElementById("eventSubmit");
                    angular.element(elem).trigger("click");
                }
            });
       }
   };

   function isEnterKeycode(keyCode) {
       return (keyCode === 13);
   }

});