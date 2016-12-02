/**
 * Created by LSteffens on 11/23/2016.
 */

eventsApp.factory ('userData', function ($resource) {
    var userResource = $resource('/data/user/:userName', {userName:'@userName'});

    return {
        save: function (user) {
            return userResource.save(user);
        }
    };
});

