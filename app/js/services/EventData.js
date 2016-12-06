/**
 * Created by LSteffens on 11/23/2016.
 */

eventsApp.factory ('eventData', function ($resource) {
    var eventResource = $resource('/data/event/:id', {id:'@id'});
    var eventQueryResource = $resource('/data/event');

    return {
       getEvent: function (eventId) {
           return eventResource.get({id: eventId});
       },
       save: function (event) {
           var maxId = 0;

           eventQueryResource.query()
               .$promise
               .then(function (eventArray) {
                   var arrayLen = eventArray.length;
                   for (i = 0; i < arrayLen; i++) {
                       if (eventArray[i].id >= maxId) {
                           maxId = eventArray[i].id;
                       }
                   }
                   event.id = maxId + 1;
                   console.log ("event id = " + event.id);
                   return eventResource.save(event);
               })
               .catch(function (response) {console.log(response);}
               );


       },
       getAllEvents: function () {
           return eventResource.query();
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