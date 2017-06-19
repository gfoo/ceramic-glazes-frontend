angular.
  module('recipeList').
  component('recipeList', {
    templateUrl: 'recipe-list/recipe-list.template.html',
    controller: function RecipeListController($http) {
      var self = this;
      this.orderProp = 'stars';

      $http.get('data/recipes.json').then(function(response) {
        self.recipes = response.data;
      });
    }
  });
