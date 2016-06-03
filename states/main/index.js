
define([
  'app', 
  ],
  function (app) {
    'use strict';
    
    //This page has a template that is determined via the ui-router
    console.log('From main/index.js: loaded 3rd, since this is the main page.');
    
    app.registerController('mainPageController', ['$scope', function ($scope) {
      //Main Page controller
      this.pageTitle = 'Custom Directives';
    }]);
});
