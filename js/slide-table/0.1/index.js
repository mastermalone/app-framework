require.config({
  paths: {
    'slide-table-service': './js/slide-table/0.1/slide-table-service/0.1/index',
    'slide-html': './js/slide-table/0.1/index.html',
    'slide-css': './js/slide-table/0.1/index.css'
  }
});

define([
  'app',
  'text!slide-html', 
  'text!slide-css',
  'emitter',
  'event-service',
  'slide-table-service',
  'css-transition-service'
  ], 
  function (app, slidehtml, slidecss, emitter) {
  'use strict';
  
  app.registerDirective('slideTable', [function (scope, element, attrs) {
    return {
      restrict: 'EA',
      scope: {
      	css: '@',
      	api: '@',
      	events: '@',
      	animate: '@'
      },
      controller: 'SlideTableController',
      controllerAs: 'stCtrl',
      bindToController: true,
      template: slidehtml,
      transclude: true,
      compile: function () {
        return {
          post: function (scope, element, attrs, ctrl) {
            var desc = document.getElementById(ctrl.animate) || document.querySelector('.'+ctrl.animate);
             
            console.log('ANIMATE THIS', desc);
            
            ctrl.getData(ctrl, function (data) {
              var idx = 0;
              ctrl.data = data.payload['event'][idx];
              
              ctrl.eventService.on('prev', function () {
                idx !== 0 ? idx-=1 : 0;
                ctrl.data = data.payload['event'][idx];
              });
              ctrl.eventService.on('next', function () {
                //desc.style.opacity = 0;
                idx < ((data.payload['event'].length)-1)  ? idx+=1 : ((data.payload['event'].length)-1);
                ctrl.data = data.payload['event'][idx];
                
                //angular.element(desc).removeClass('fadein');
                //angular.element(desc).addClass('fadein');
                desc.addEventListener(ctrl.transitionEnd, function (e) {
                  //desc.style.opacity = 0;
                  //ctrl.data = data.payload['event'][idx];
                  //angular.element(desc).removeClass('fadeout');
                });
              });
              
            });
          }
        };
      }
    };
  }]);
  
  app.registerController('SlideTableController', [
  '$scope', 
  '$compile', 
  '$element',
  'slideTableService',
  'eventService',
  'cssTransition',
  function ($scope, $compile, $element, slideTableService, eventService, cssTransition) {
    var _this = this;
    var style = '<style type="text/css", rel="stylesheet" scoped>'+ slidecss +'</style>';
    var apiURL = _this.api || './webservicemocks/event-data/0.1/index.json';
    
    //Compile the stylesheet into a usable DOM element and append it to the directive element
    $element.append($compile(style)($scope));
    
    _this.eventService = eventService; //Give access to this service throught this scope
    
    _this.fontcolor = '#ff0000';
    
    _this.transitionEnd = cssTransition.transitionEnd();
    
    //Takes the scope object, which is bound to the directive's scope        
    _this.getData = function (scope, callback) {
      slideTableService.getData(apiURL, scope, callback);
    };
    
    _this.slideTable = function () {
      
    };
    console.log('TRANSITION EL:', _this.animate);
  }]);
});
