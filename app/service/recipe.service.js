angular.
  module('RecipeService').
  factory('Recipe', ['$resource',
    function($resource) {
      return $resource('data/:recipeId.json', {}, {
        query: {
          method: 'GET',
          params: {recipeId: 'recipes'},
          isArray: true
        }
      });
    }
  ]);
