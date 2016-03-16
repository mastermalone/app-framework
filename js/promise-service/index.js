require.config({
    paths: {
        'index-impl': './js/promise-service/index-impl'
    }
});

define(['app', 'index-impl'], function (app, promiseFactoryImpl) {
    'use strict';
    console.log('resolve service: Being hailed:');
    //Remember to use the name you specified 
    app.registerFactory('promiseFactory', [promiseFactoryImpl]);
});