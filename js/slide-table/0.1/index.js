require.config({
  paths: {
    'slide-html': './js/slide-table/0.1/index.html',
    'slide-css': './js/slide-table/0.1/index.css',
  }
});

define(['app'], function (app) {
  'use strict';
  
  app.registerDirective('slideTable', [function (scop, element, attrs) {
    return {
      restrict: 'EA',
      scope: {},
      conroller: 'SlideTableController',
      conreollerAs: 'stCtrl',
      bindToController: true,
      compile: function () {
        return {
          pre: function () {
            
          },
          post: function () {
            
          }
        };
      }
    };
  }]);
  
  app.registerController('SlideTableController', ['$scope', function () {
    var _this = this;
    
    _this.defaults = {
      
    };
    
    _this.getListOfTabularData = function () {
      
    };
    _this.slideTable = function () {
      
    };
  }]);
});
