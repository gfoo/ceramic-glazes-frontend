angular.
  module('recipeDetail').
  component('recipeDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.recipeId}}</span>',
    controller: ['$routeParams',
      function RecipeDetailController($routeParams) {
        this.recipeId = $routeParams.recipeId;
      }
    ]
  });
