require.config({
  paths: {
    'sidecss': './js/side-pannel/0.1/index.css',
    'sidehtml': './js/side-pannel/0.1/index.html',
    'animation-service': './js/animation-service/0.1/index'
  }
});

define(['app', 'text!sidecss', 'text!sidehtml'], function (app, spcss, sphtml) {
  'use strict';
  
  app.registerDirective('sidePannel', [function (scope, element, attrs) {
    return {
      restrict: 'EA',
      scope: {
        placement: '@?',
        slideTabOn: '@?',
        slideTabId: '@?',
        pannelOpen: '=?'
      },
      controller: 'SidePannelController',
      controllerAs: 'SPCtrl',
      bindToController: true,
      template: sphtml,
      compile: function () {
        return {
          post: function () {
            /*
            element.find('#'+scope.slideTabId).on('click', function toggleSlider(e) {
                          console.log('toggling slider');
                        });*/
            
          }
        };
      }
    };
  }]);
  
  app.registerController('SidePannelController', ['$scope', function ($scope) {
    var _this = this;
    
    _this.defaults = {
      placement: 'top',
      slideTabOn: true,
      slideTabId: 'tab',
      pannelOpen: false
    };
    
    /*_this.toggleOpen = function () {
      $scope.watch('scope.pannelOpen', function (newValue, oldValue) {
        scope.pannelOpen == newValue ? oldValue : newValue; 
        console.log('slidepanel open', scope.pannelOpen);
      });
      
      return scope.pannelopen;
    };*/
    
    console.log('Side Pannel controller is ready');
  }]);
});
