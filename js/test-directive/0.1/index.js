require.config({
  paths: {
    'testTemplate': './js/test-directive/0.1/index',
    'test-service': './js/test-service/0.1/index'
  }
});

define(['app', 'text!testTemplate.html', 'text!testTemplate.css', 'test-service'], function (app, testHtml, testCss) {
  'use strict';
  
  app.registerDirective('testDirective', [function () {
    return {
      restrict: 'AE',
      scope: {
        name: '@'
      },
      template: testHtml,
      controller: 'TestController',
      controllerAs: 'testCtrl',
      bindToController: true,
      link: function (scope, element, attrs, ctrl) {
        var TestDirective = {
          init: function initialize() {
            console.log('initializing the test directive');
            ctrl.useTestService();
          }
        };
        
        TestDirective.init();
      }
    };
  }]);
  
  app.registerController('TestController', 
  ['$scope', 
  '$element', 
  '$compile',
  'testService', 
  function ($scope, $element, $compile, testService) {
    var _this = this;
    var style = document.createElement('style');
    
    console.log('TestService', testService);
    
    style.innerHTML = testCss;
    $element.append($compile(style)($scope));  
    
    _this.title = 'Easy Button';
    _this.useTestService = function useTestService() {
      testService.init();
    };
  }]);
});

