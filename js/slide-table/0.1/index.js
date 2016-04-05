require.config({
  paths: {
    'slide-table-service': './js/slide-table/0.1/slide-table-service/0.1/index',
    'slide-html': './js/slide-table/0.1/index.html',
    'slide-css': './js/slide-table/0.1/index.css'
  }
});

define([
  'app',
  'text!slide-html', 
  'text!slide-css',
  'slide-table-service', 
  ], 
  function (app, slidehtml, slidecss) {
  'use strict';
  
  app.registerDirective('slideTable', [function (scope, element, attrs) {
    return {
      restrict: 'EA',
      scope: {
      	css: '@',
      	api: '@'
      },
      controller: 'SlideTableController',
      controllerAs: 'stCtrl',
      bindToController: true,
      template: slidehtml,
      transclude: true,
      compile: function () {
        return {
          pre: function (scope, element, attrs, ctrl) {
            console.log('PRE CALL');
          },
          post: function (scope, element, attrs, ctrl) {
            ctrl.getListOfTabularData(ctrl, function (data) {
              var idx = 1;
              ctrl.data = data.payload['event'][idx];
              console.log('THE DATA IN CALLBACK', ctrl.data);
            });
            console.log('POST CALL');
          }
        };
      }
    };
  }]);
  
  app.registerController('SlideTableController', [
  '$scope', 
  '$compile', 
  '$element',
  'slideTableService',
  function ($scope, $compile, $element, slideTableService) {
    var _this = this;
    var style = '<style type="text/css", rel="stylesheet" scoped>'+ slidecss +'</style>';
    var apiURL = _this.api || './webservicemocks/event-data/0.1/index.json';
    
    //Compile the stylesheet into a usable DOM element and append it to the template
    $element.append($compile(style)($scope));
    
    _this.fontcolor = '#ff0000';
    
    //Takes the scope object, which will come from the directive's bound controller        
    _this.getListOfTabularData = function (scope, callback) {
      slideTableService.getData(apiURL, scope, callback);
    };
    
    _this.slideTable = function () {
      
    };
  }]);
});
