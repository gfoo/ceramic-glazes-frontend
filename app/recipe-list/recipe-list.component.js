angular.
  module('recipeList').
  component('recipeList', {
    templateUrl: 'recipe-list/recipe-list.template.html',
    controller: function RecipeListController() {
      this.recipes = [
        {
          name: 'Tenmoku',
          content: 'TALC_2C=1.0, F_P_ICE10=4.0, Fe2O3=1.0, K_PUL=1.0, S_400=3.0, CA_CH=1.0'
        }, {
          name: 'Glaçure pour grès incolore et mat',
          content: 'MA_KAOLINITE=15.0, ZnO=20.0, MA_BaCO3=12.0, MA_CRAIE=8.0, MA_ORTHOCLASE=60.0, MA_DOLOMIE=25.0'
        }
      ];
    }
  });
