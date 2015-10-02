define(['angular', 'couch-potato', 'ui-router'], function (angular, couchPotato) {
    'use strict';
    console.log('App is loaded', couchPotato);
    
    var app = angular.module('app', ['scs.couch-potato', 'ui.router']);
    app.controller('appController', function ($scope) {
        this.data = {
            hello: 'Hello from the object litteral',
            other: 'The other message from the object litteral'
        };
        console.log('value of this:', this.data);
    });
    
    couchPotato.configureApp(app);
    console.log('app object', app);
    return app;
});
