angular.
  module('recipeDetail').
  component('recipeDetail', {
    templateUrl: 'views/recipe-detail/recipe-detail.template.html',
    controller: ['Recipe','$routeParams',
      function RecipeDetailController(Recipe,$routeParams) {
        var self = this;
        self.recipe = Recipe.get($routeParams.recipeId).then(function(recipe){
              self.recipe = recipe;
        });
      }
    ]
  });
