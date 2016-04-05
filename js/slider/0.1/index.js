require.config({
	paths: {
		'sliderhtml': './js/slider/0.1/index.html',
		'slidercss': './js/slider/0.1/index.css',
	}
});

define([
	'app', 
	'text!sliderhtml', 
	'text!slidercss'], 
	function (app, slidehtml, slidecss) {
	'use strict';
	
	app.registerDirective('slider', [function () {
		return {
			restrict: 'E',
			scope: {},
			template: slidehtml,
			controller: 'SildeController',
			controllerAs: 'slideCtrl',
			bindToController: true,
			compile: function () {
				return {
					post: function (scope, element, attrs, ctrl) {
						console.log('Slider Directive is running');
					}
				};
			}
		};
	}]);
	
	app.registerController('SildeController', [
	'$scope', 
	'$compile', 
	'$element', 
	function ($scope, $compile, $element) {
		var style = '<style type="text/css" rel="stylesheet">'+ slidecss + '</style>';
		
		//Compile the style element into a usable DOM string and append it to the directive element
		$element.append($compile(style)($scope));
	}]);
});
