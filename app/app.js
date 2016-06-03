define(['angular', 'couch-potato', 'ui-router'], function (angular, couchPotato) {
    'use strict';
    console.log('App is loaded:  Loaded 2nd', couchPotato);
    
    var app = angular.module('app', ['scs.couch-potato', 'ui.router']);
            
    couchPotato.configureApp(app);
    return app;
});
