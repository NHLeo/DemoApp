/**
 * Created by LSteffens on 11/23/2016.
 */

eventsApp.factory ('eventData', function ($resource) {
    var eventResource = $resource('/data/event/:id', {id:'@id'});

    return {
       getEvent: function () {
           return eventResource.get({id: 1});
       },
       save: function (event) {
           var maxId = 0;

/*           var events = eventResource.query();
           events.$promise.then (
               function(eventsData) {
                    console.log(eventsData);
               });

           console.log ("Query returned: " + events);*/


           eventResource.query(function (events) {
               console.log('Events returned:');
               console.log(events);
           }).$promise.then(function (response) {
               console.log('In the promise:');
               console.log(response);
           }).catch(function (response1) {
               console.log('failure1', response1)
           });



/*
           resource.query()
               .$promise
               .then(function (eventArray) {
                   var arrayLen = eventArray.length;
                   for (i = 0; i < arrayLen; i++) {
                       if (eventArray[i].id > maxId) {
                            maxId = eventArray[i].id;
                       }
                   }
               })
               .catch(function (response) {console.log(response);}
               );
*/
           event.id = maxId + 998;
           return eventResource.save(event);
       }
    };
});

/*
eventsApp.factory('eventData', ['$q', '$resource', function EventData($q, $resource) {
    var resource = $resource('/app/data/event/:id', {id: '@id'}, {
        "getAll": {
            method: "GET",
            isArray: true,
            params: {something: "foo"}
        }
    });
    return {
        getEvent: function (eventId) {
            return resource.get({id: eventId});
        }, save: function save(event) {
            var tempid = 0;
            resource.query(function (events) {
                angular.forEach(events, function (temp_event) {
                    if (temp_event.id > tempid) {
                        tempid = temp_event.id;
                        console.log("----" + tempid + "----");
                    }
                });
            }).$promise.then(function (response) {
                console.log('success1', response);
                event.id = tempid + 1;
                console.log("New event id " + event.id);
                return resource.save(event).$promise;
            }).catch(function (response) {
                console.log('failure1', response)
            });
        }, getAllEvents: function () {
            return resource.query();
        }
    };
}]); */