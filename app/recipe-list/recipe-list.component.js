angular.
  module('recipeList').
  component('recipeList', {
    templateUrl: 'recipe-list/recipe-list.template.html',
    controller: ['Recipe', '$http',
      function RecipeListController(Recipe,$http) {
        var self = this;
        Recipe.query().then(function(recipes){
              self.recipes = recipes;
        });
        this.orderProp = 'stars';
      }
    ]
    });
