
define([
  'app',
  ],
  function (app) {
    'use strict';
    
    //This page has a template that is determined via the ui-router
    console.log('From main/index.js: loaded 3rd, since this is the main page.');
    /*
    app.registerDirective('mainPage', [function () {
      return {
        restrict: 'AE',
        scope: {},
        controller: 'mainPageController',
        controllerAs: 'mpctrl',
        bindToController: true,
        link: function (scope, element, attrs, ctrl) {
          //ctrl.initServiceWorker();
          //alert('HOPE THIS FIRES');
        }
      };
    }]);
    
    app.registerController('mainPageController', ['$scope', 'serviceWorker', '$element', function ($scope, serviceWorer, $element) {
      //Main Page controller
      var _this = this;
      _this.pageTitle = 'Custom Directives';
      
      console.log('THIS IS THE MAIN PAGE CTRL');
    }]);*/
});
