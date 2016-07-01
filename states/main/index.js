
define([
  'app',
  'serivice-worker-service'
  ],
  function (app) {
    'use strict';
    
    //This page has a template that is determined via the ui-router
    console.log('From main/index.js: loaded 3rd, since this is the main page.');
    
    app.registerDirective('mainPageDirective', [function () {
      return {
        restrict: 'AE',
        scope: {},
        controller: 'mainPageController',
        controllerAs: 'mpctrl',
        bindToController: true,
        link: function (scope, element, attrs, ctrl) {
          ctrl.initServiceWorker();
        }
      };
    }]);
    
    app.registerController('mainPageController', ['$scope', 'serviceWorker', function ($scope, serviceWorer) {
      //Main Page controller
      var _this = this;
      _this.pageTitle = 'Custom Directives';
      
      _this.initServiceWorker = function () {
        serviceWorker.init();
      };
      console.log('THIS IS THE MAIN PAGE CTRL');
      
      
      
    }]);
});
