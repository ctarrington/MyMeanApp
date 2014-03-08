'use strict';

/* Controllers */

angular.module('myMeanApp').
  controller('ListController', ['$scope', 'Pets', function($scope, Pets) {
        $scope.model = {};
        $scope.model.greeting = 'Yo';
        $scope.model.pets = Pets.query();

    }])
  .controller('NewController', ['$scope', '$location', 'Pets', function($scope, $location, Pets) {

        $scope.petForm = {name: null };

        $scope.create = function() {
            $scope.error = '';
            var pet = new Pets({
                name: $scope.petForm.name
            });
            pet.$save(function(response) {
                if (response._id == null)
                {
                    $scope.error = 'Error saving Pet!';
                }
                else
                {
                    $location.path('list');
                }
            });
        };
  }]);