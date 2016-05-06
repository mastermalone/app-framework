require.config({
    paths: {
        'app': './app/app',
        'tout': './js/modules/tout-directive/index',
        'get-state-service': './js/get-state-service/index',
        'auto': './js/auto-complete/index',
        //'promise-factory': './js/promise-service/index',
        's-pannel': './js/side-pannel/0.1/index',
        'slide-table': './js/slide-table/0.1/index', 
        'slider': './js/slider/0.1/index',
        'app-audio': './js/app-audio/0.1/index' 
    } 
});

define([
	'app', 
	'get-state-service', 
	//'promise-factory', 
	'tout', 
	'auto', 
	's-pannel', 
	'slide-table',
	'slider',
	'app-audio'], 
	//function (app, getState, promiseFactory) {
	function (app, getState) {
    'use strict';
    
    //This page has a template that is determined via the ui-router
    console.log('From main/index.js: loaded 3rd, since this is the main page.');
    
    app.registerController('mainController', ['$scope', function ($scope) {
        //Main Page controller
        this.pageTitle = 'Custom Directives';
    }]);
});
