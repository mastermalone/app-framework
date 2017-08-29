require.config({
  paths: {
    'html': './js/contact-list/0.1/index.html',
    'css': './js/contact-list/0.1/index.css'
  }
});

define(['app', 'text!html', 'text!css'], function contactListComponent(app, html, css) {
  'use strict';
  console.log('CONTACT LIST');
  app.registerDirective('contactList', function contactListDDO() {
    return {
      restrict: 'EA',
      scope: {},
      template: html,
      controller: 'contactListController',
      controllerAs: 'clCtrl',
      bindToController: true,
      link: function clDDOLink(scope, element, attrs, ctrl) {
        //Set DOM actions here
        ctrl.add();
      }
    };
  });
  
  app.registerController('contactListController', ['$scope', '$element', function contactListCtrl($scope, $element) {
    var _this = this;
    
    _this.add = function add(elm) {
      console.log('CALLING THE ADD, METHOD');
    };
  }]);
});
