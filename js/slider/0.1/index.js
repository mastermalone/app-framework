require.config({
	paths: {
		'sliderhtml': './js/slider/0.1/index.html',
		'slidercss': './js/slider/0.1/index.css',
		'event-service': './js/event-service/0.1/index'
	}
});

define([
	'app', 
	'text!sliderhtml', 
	'text!slidercss',
	'emitter',
	'event-service',
	'slider-service'], 
	function (app, slidehtml, slidecss, emitter) {//Do not add angular services as an argument
	'use strict';
	
	app.registerDirective('slider', [function () {
		return {
			restrict: 'E',
			scope: {
			  api: '@',
			  left: '&slideLeft',//bound to the normalized version of this element attribute
			  right: '&slideRight',
			},
			template: slidehtml,
			controller: 'SildeController',
			controllerAs: 'slideCtrl',
			bindToController: true,
			compile: function () {
				return {
					post: function (scope, element, attrs, ctrl) {
					  ctrl.getData(scope, function (data) {
					    var idx = 0;
					    ctrl.data = data.payload['event'][idx];
					    ctrl.apiData = data.payload['event'];
					    ctrl.eventService.on('slide:left', function () {
                console.log('Animate Left');
              });
              ctrl.eventService.on('slide:right', function () {
                console.log('Animate right');
              });
					  });
					}
				};
			}
		};
	}]);
	
	app.registerController('SildeController', [
	'$scope', 
	'$compile', 
	'$element',
	'eventService',
	'sliderService',
	function ($scope, $compile, $element, eventService, sliderService) {
	  var _this = this;
		var style = '<style type="text/css" rel="stylesheet">'+ slidecss + '</style>';
		var apiURL = _this.api || './webservicemocks/event-data/0.2/index.json';
		
		console.log('ELEMNT WIDTH', $element);
		//Compile the style element into a usable DOM string and append it to the directive element
		$element.append($compile(style)($scope));
		
		_this.eventService = eventService; //Give access to this service throught this scope
		
		_this.getData = function (scope, callback) {
		  sliderService.getData(apiURL, scope, callback);
		};
		_this.slideLeft = function () {
		  _this.eventService.emit('prev');
		};
		_this.slideRight = function () {
		  _this.eventService.emit('next');
		};
		
	}]);
});
