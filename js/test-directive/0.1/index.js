require.config({
  paths: {
    'testTemplate': './js/test-directive/0.1/index',
    'test-service': './js/test-service/0.1/index'
  }
});

define(
  ['app', 
  'text!testTemplate.html', 
  'text!testTemplate.css', 
  'test-service'], 
  function (app, testHtml, testCss) {
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
  
  //This test controller will be nasty and large, but it is for R&D only
  app.registerController('TestController', 
  ['$scope', 
  '$element', 
  '$compile',
  'testService', 
  function ($scope, $element, $compile, testService) {
    var _this = this;
    var style = document.createElement('style');
    var moduleManager = testService.moduleManager();
    var mod1;
    var mod2;
    
    console.log('TestService', testService);
    
    style.innerHTML = testCss;
    $element.append($compile(style)($scope));  
    
    _this.title = 'Easy Button';
    _this.useTestService = function useTestService() {
      testService.init();
      
      moduleManager.define('module1', [], function module1Impl() {
        var name = 'Module1';
        function stateName() {
          console.log('Module name is:', name);
        }
        
        return {
          stateName: stateName
        };
      });
      
      moduleManager.define('module2', ['module1'], function module1Imp2(module1) {
        var name = 'Module2';
        function awesomeSauce() {
          module1.stateName();
        }
        
        return {
          awesomeSauce: awesomeSauce
        };
      });
      
      mod1 = moduleManager.get('module1');
      mod2 = moduleManager.get('module2');
      
      mod2.awesomeSauce();
    };
  }]);
});

