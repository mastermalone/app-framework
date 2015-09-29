require.config({
    urlArgs: 'bust='+(new Date().getTime()),
    baseUrl: '/',
    paths: {
        'angular': 'lib/angular.min',
        'ui-router': 'lib/angular-ui-router.min',
        'couch-potato': 'lib/couch-potato.min',
    },
    shims: {
        'angular': {
            exports: 'angular'
        },
        'couch-potato': {
            deps: 'angular',
            exports: 'couch-potato'
        },
        'ui-router': {
            deps: 'angular',
            exports: 'angular-ui-router'
        }
    }
});

define([
    'angular',
    'ui-router',
    'couch-potato'
],
function () {
    'use strict';
    
    var AppBootstrap = {
        defaultStateFile: 'path/to/state-file.json',
        payload: '',
        init: function (stateFile) {
            //initialize the bootstrapping
        },
        getData: function () {
            //Create some promisary AJAX service and use it as a service
        }
    };
    
    return AppBootstrap;
});
