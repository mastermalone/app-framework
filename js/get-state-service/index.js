require.config({
    paths: {
        'app': './app/app',
        'get-state': './js/get-state-service/index-impl'
    }
});

define(['app', 'get-state'], function (app, getState) {
    'use strict';
    app.registerFactory('getStateService', ['$rootScope', getState]);
});
