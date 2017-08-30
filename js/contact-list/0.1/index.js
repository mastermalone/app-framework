require.config({
  paths: {
    'contact-html': './js/contact-list/0.1/index.html',
    'contact-css': './js/contact-list/0.1/index.css'
  }
});

define(['app', 'text!contact-html', 'text!contact-css', 'linked-list-service'], function contactListComponent(app, html, css) {
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
  
  app.registerController('contactListController', ['$scope', '$element', 'linkedListService', function contactListCtrl($scope, $element, linkedListService) {
    var _this = this;
    
    _this.add = function add(elm) {
      console.log('CALLING THE ADD, METHOD', linkedListService);
    };
  }]);
});
