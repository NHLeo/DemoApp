/**
 * Created by LSteffens on 12/9/2016.
 */
'use strict';
eventsApp
    .directive('greeting', function() {
        return {
            restrict: 'E',
            replace: true,
            template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
            controller: '@',
            name: 'kungFu'
        }
  });

eventsApp
.directive('newgreeting', function () {
    return {
        restrict: 'E',
        template: "<div><button class='btn' ng-click='sayHello2()'>Say Hello2</button><div ng-transclude></div></div>",
        controller: 'NewGreetingController2'
    }
  }).directive('finnish', function () {
      return {
          restrict: 'A',
          require: '^newgreeting',
          link: function(scope, element, attr, controller) {
              controller.addGreeting2('hei');
          }
      }
  }).directive('hindi', function () {
    return {
        restrict: 'A',
        require: '^newgreeting',
        link: function(scope, element, attr, controller) {
            controller.addGreeting2('नमस्कार');
        }
    }
  });

eventsApp.controller('GreetingController',
    function GreetingController($scope){
        var greetings = ['hello'];
        $scope.sayHello = function () {
            alert(greetings.join());
        };
        this.addGreeting = function (greeting){
            greetings.push(greeting);
        }
    });

eventsApp.controller('NewGreetingController2',
    function NewGreetingController2($scope){
        var greetings2 = ['hi!'];
        $scope.sayHello2 = function () {
            alert(greetings2.join());
        };
        this.addGreeting2 = function (greeting){
            greetings2.push(greeting);
        }
    });