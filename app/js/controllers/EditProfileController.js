'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder, userData) {
        $scope.user = {};

        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }

        $scope.saveUser = function (user, newProfileForm) {
            if (newProfileForm.$valid) {
                userData.save(user)
                    .$promise
                    .then(function(response) {
                        console.log('success', response);})
                    .catch(function(response) {
                        console.log('failure', response);}
                    );
            }
        };

    }
);
