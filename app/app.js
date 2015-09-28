define([
    'angular', 
    'couch-potato', 
    'ui-router'
], 
function () {
    'use strict';
        
    var app = angular.module('app', ['ui-router', 'couch-potato']);
    console.log('App is loaded');
    return app;
});
