
eventsApp.directive('repeatX', function($compile){
   return {
       /*       compile: function (element, attributes) {
        for (var i=0; i < Number(attributes.repeatX)-1; i++) {
        element.after(element.clone().attr('repeat-x', 0));
        }
        }
        };
        */

       compile: function (element, attributes) {
           return {
               pre: function (scope, element, attributes, controller) {
                   for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
                       element.after(element.clone().attr('repeat-x', 0));
                   }
               }
           }
       }
   }

});