
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
