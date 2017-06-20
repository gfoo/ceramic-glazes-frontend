angular.
  module('recipeDetail').
  component('recipeDetail', {
    templateUrl: 'recipe-detail/recipe-detail.template.html',
    controller: ['Recipe','$routeParams',
      function RecipeDetailController(Recipe,$routeParams) {
        var self = this;
        self.recipe = Recipe.get({recipeId: $routeParams.recipeId});
      }
    ]
  });
