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
	
	app.registerDirective('slider', ['$timeout', function () {
		return {
			restrict: 'E',
			scope: {
			  api: '@',
			  left: '&slideLeft',//bound to the normalized version of this element attribute
			  right: '&slideRight',
			  slideWrap: '@',
			  slideTabs: '@'
			},
			template: slidehtml,
			controller: 'SildeController',
			controllerAs: 'slideCtrl',
			bindToController: true,
			compile: function () {
				return {
					post: function (scope, element, attrs, ctrl, $timeout) {
					  ctrl.getData(scope, function (data) {
					    var idx = 0;
					    var defer = ctrl.q.defer();
					    
					    function setCtrlData() {
					      ctrl.data = data.payload['event'][idx];
                ctrl.apiData = data.payload['event'];
					    }
					    
					    function initListeners() {
					      ctrl.timeout(function () {
                  var slideWrap = document.getElementById(attrs.slideWrap) || document.querySelector('.'+attrs.slideWrap);
                  var slideTab = document.getElementById(attrs.slideTabs) || document.querySelector('.'+attrs.slideTabs);
                  var stWidth = slideTab.offsetWidth;
                  ctrl.totalSlidesLength = (slideTab.offsetWidth*ctrl.apiData.length);
                  
                  ctrl.eventService.on('prev', function () {
                    idx !== 0 ? idx-=1 : 0;
                    ctrl.slideDistanceValue += stWidth;
                    console.log('Animate right', slideTab.offsetWidth, ctrl.slideDistanceValue);
                  });
                  
                  ctrl.eventService.on('next', function () {
                    idx < ((data.payload['event'].length)-1)  ? idx+=1 : ((data.payload['event'].length)-1);
                    ctrl.slideDistanceValue = -stWidth*idx;
                    console.log('Animate right', slideWrap.querySelector('.slide-tab'), slideTab.offsetWidth, ctrl.slideDistanceValue);
                    angular.element(slideWrap).addClass('slide');
                  });
                }, 0);
					    }
					    
					    defer.promise
              .then(setCtrlData)
              .then(initListeners);
              defer.resolve();
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
	'$timeout',
	'$q',
	function ($scope, $compile, $element, eventService, sliderService, $timeout, $q) {
	  var _this = this;
		var style = '<style type="text/css" rel="stylesheet">'+ slidecss + '</style>';
		var apiURL = _this.api || './webservicemocks/event-data/0.2/index.json';
		
		//Compile the style element into a usable DOM string and append it to the directive element
		$element.append($compile(style)($scope));
		
		_this.eventService = eventService; //Give access to this service throught this scope
		_this.timeout = $timeout;
		_this.totalSlidesLength = '';
		_this.slideDistanceValue = '';
		_this.q = $q;
		
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
