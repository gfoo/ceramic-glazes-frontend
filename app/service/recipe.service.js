angular.
  module('recipeService').
  factory('Recipe', ['$http', function($http) {
    var factory = {};
    factory.query = function() {
      return $http.get('http://localhost:8081/ceramic-glazes/v1/recipes').
        then(function(response) {
          return response.data;
        }
      );
    };
    factory.get = function(id) {
      return $http.get('http://localhost:8081/ceramic-glazes/v1/recipes/'+id).
        then(function(response) {
          return response.data;
        }
      );
    };
    return factory;
    }
  ]);
