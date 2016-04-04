require.config({
  paths: {
    'slide-html': './js/slide-table/0.1/index.html',
    'slide-css': './js/slide-table/0.1/index.css',
  }
});

define(['app', 'text!slide-html', 'text!slide-css'], function (app, slidehtml, slidecss) {
  'use strict';
  
  app.registerDirective('slideTable', [function (scope, element, attrs) {
    return {
      restrict: 'EA',
      scope: {
      	css: '@',
      	model: '@'
      },
      controller: 'SlideTableController',
      controllerAs: 'stCtrl',
      bindToController: true,
      template: slidehtml,
      transclude: true,
      compile: function () {
        return {
          pre: function (scope, element, attrs) {
            console.log('VALUE OF SLIDE TABLE Element PRE', scope);
          },
          post: function (scope, element, attrs) {
            console.log('VALUE OF SLIDE TABLE Element', scope);
          }
        };
      }
    };
  }]);
  
  app.registerController('SlideTableController', [
  '$scope', 
  '$compile', 
  '$element',
  function ($scope, $compile, $element) {
    var _this = this;
    var style = '<style type="text/css", rel="stylesheet" scoped>'+ slidecss +'</style>';
    
    //Compile the stylesheet into a usable DOM element and append it to the template
    $element.append($compile(style)($scope));
    
    this.fontcolor = '#ff0000';
    
    console.log('Here is your SLIDE TABLE');
    _this.defaults = {
      
    };
    
    _this.getListOfTabularData = function () {
      
    };
    _this.slideTable = function () {
      
    };
  }]);
});
