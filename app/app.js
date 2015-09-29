require.config({
    baseUrl: '/',
    paths: {
        'app-bootstrap': 'app/app.bootstrap'
    }
});

define([
    'app-bootstrap'
], 
function () {
    'use strict';
    
    //app-bootsrap brings in all the intial dependencies to start the app 
    var app = angular.module('app', ['ui-router', 'couch-potato']);
    console.log('App is loaded');
    return app;
});
