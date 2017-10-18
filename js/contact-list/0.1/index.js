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
        var linkedList = ctrl.linkedList();
        var Mike = linkedList.add({name: 'Mike', age: 43});
        var Joe = linkedList.add({name: 'Joe', age: 53});
        var Stan = linkedList.add({name: 'Stan', age: 63});
        
        linkedList.get(1);
        linkedList.remove(0);
        console.log('DIRECTIVE LINKED LIST:',  linkedList);
      }
    };
  });
  
  app.registerController('contactListController', ['$scope', '$element', 'linkedListService', function contactListCtrl($scope, $element, linkedListService) {
    var _this = this;
    
    _this.linkedList = function linkedList(elm) {
      return new linkedListService();
    };
  }]);
});
