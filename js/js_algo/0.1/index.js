require.config({
  paths: {
    'js-algo-service': './js/js_algo/0.1/js_algo_service/0.1/index',
    'html': './js/js_algo/0.1/index.html',
    'css': './js/js_algo/0.1/index.css',
  }
});

define(['app', 'text!html', 'text!css'], 
function jsAlgo(app, html, css) {
  'use strict';
  
  app.registerDirective('jsAlgo', [function () {
    return {
      restrict: 'EA',
      scope: true,
      template: html,
      controller: 'jsAlgoController',
      controllerAs: 'jsAlgoCtrl',
      bindToController: true,
      link: function jsAlgoLink(scope, element, attrs, ctrl) {
        console.log('THE JS_ALGO');
        var testArray = ['Mike', 'Tim', 'Erin', 'Elijah', 'Mike', 'Erin', 'Sheila', 'Elijah'];
        ctrl.findDuplicates(testArray);
        ctrl.pointsComparison(5, 6, 7, 3, 6, 10);
        ctrl.sum(6, [1, 2, 3, 4, 10, 11]);
        ctrl.bigSum(5, [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
        ctrl.diagonalDifference(3);
        ctrl.mergeSortedArray([2,4,6,8,10], [1,3,5,7,9]);
        ctrl.reverseString('Hello Sir, can I help you?');
      }
    };
  }]);
  
  app.registerController('jsAlgoController', ['$scope', '$element', 'algoService', 
  function jsAlgoController($scope, $element, algoService) {
    var _this = this; 
    console.log('THE JS ALGO CONTROLLER IS LOADED');
    
    _this.findDuplicates = function findDuplicates(list) {
      algoService.findDuplicates(list);
    };
    
    _this.pointsComparison = function findDuplicates(a0, a1, a2, b0, b1, b2) {
      algoService.pointsComparison(a0, a1, a2, b0, b1, b2);
    };
    
    _this.sum = function sum(n, arr) {
      algoService.sum(n, arr);
    };
    
    _this.bigSum = function bigSum(n, arr) {
      algoService.bigSum(n, arr);
    };
    
     _this.diagonalDifference = function diagonalDifference(stdin) {
      algoService.diagonalDifference(stdin);
    };
    
    _this.mergeSortedArray = function mergeSortedArray(listA, listB) {
      algoService.mergeSortedArray(listA, listB);
    };
    
    _this.reverseString = function reverseString(str) {
      algoService.reverseString(str);
    };
    
  }]);
});
