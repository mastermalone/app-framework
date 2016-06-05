define(['app'], function (app) {
  console.log('Loading the aboutController');
  
  app.registerDirective('aboutPage', [function () {
    return {
      restrict: 'EA',
      scope: {},
      controller: 'aboutController',
      controllerAs: 'abtCtrl',
      bindToCOntroller: true,
      link: function (scope, element, attrs, ctrl) {
        console.log('CTRL', ctrl);
      }
    };
  }]);
  
  app.registerController('aboutController', [function () {
    console.log('Loading the aboutController', this);
    this.title = 'About Page Controller';
  }]);
});
