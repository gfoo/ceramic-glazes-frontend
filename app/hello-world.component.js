'use strict';

angular.
  module('AngularJSSandBox').
  component('helloWorld', {
    template:
        '<p>{{$ctrl.msg}}</p>',
    controller: function HellowWorldController() {
      this.msg = "Hellow world component";
    }
  });
