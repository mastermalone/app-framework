
require.config({
    urlArgs: 'bust='+(new Date().getTime()),
    baseUrl: '/',
    paths: {
        'angular': 'lib/angular',
        'couch-potato': 'lib/angular-couch-potato',
    },
    shims: {
        'angular': {
            exports: 'angular'
        },
        'couch-potato': {
            deps: ['angular'],
            exports: 'couch-potato'
        }
    }
});


define(['couch-potato'], function (couchPotato) {
    'use strict';
    
    console.log('App is loaded', couchPotato);
    //app-bootsrap brings in all the intial dependencies to start the app 
    var app = angular.module('app', ['scs.couch-potato']);
    couchPotato.configureApp(app);
    
    return app;
});
