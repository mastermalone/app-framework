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
  
  console.log('HELLO', emitter);
  app.registerDirective('slideTable', [function (scope, element, attrs) {
    return {
      restrict: 'EA',
      scope: {
      	css: '@',
      	api: '@',
      	events: '@',
      	animate: '@'//ID or class of template element you want to animate
      },
      controller: 'SlideTableController',
      controllerAs: 'stCtrl',
      bindToController: true,
      template: slidehtml,
      transclude: true, //Needed to allow this directive's element to wrap other elements.
      compile: function () {
        return {
          post: function (scope, element, attrs, ctrl) {
            var desc = document.getElementById(ctrl.animate) || document.querySelector('.'+ctrl.animate);
            
            ctrl.getData(ctrl, function (data) {
              var idx = 0;
              ctrl.data = data.payload.event[idx];
              angular.element(desc).addClass('fadein');
              ctrl.bgImage = data.payload.event[idx].image;
              
              ctrl.eventService.on('prev', function () {
                idx !== 0 ? idx-=1 : 0;
                ctrl.data = data.payload.event[idx];
                ctrl.bgImage = data.payload.event[idx].image;
              });
              
              ctrl.eventService.on('next', function () {
              	if (idx >= ((data.payload['event'].length)-1)) {
                 	idx = -1;
                }
                idx < ((data.payload['event'].length)-1)  ? idx+=1 : ((data.payload['event'].length)-1); //Increase the idx value if idx is less than the number of items in the data 
                ctrl.data = data.payload.event[idx]; //Update the value of the controller's data property' for use in the view
                ctrl.bgImage = data.payload.event[idx].image; 
                
                desc.addEventListener(ctrl.transitionEnd, function (e) {
                  //If needed for after CSS Tramsiton is complete
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
    
    _this.eventService = eventService; //Give access to this service throught this scope which is bound to the directive
    _this.fontcolor = '#000000';
    _this.opacity = 0;//Set CSS value for fade in trasition
    _this.bgImage = '';
    _this.transitionEnd = cssTransition.transitionEnd();
    
    //Pass in the scope object, which is bound to the directive's isolate scope        
    _this.getData = function (scope, callback) {
      slideTableService.getData(apiURL, scope, callback);
    };
  }]);
});
