'use strict';

angular.module('myMeanApp').factory('Pets', ['$resource', function($resource) {
    return $resource('pets/:petId', {
        petId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
