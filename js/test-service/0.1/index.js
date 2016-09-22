require.config({
  paths: {
    'index-impl': './js/test-service/0.1/index-impl'
  }
});

define(['app', 'index-impl'], function (app, indexImpl) {
  'use strict';
  
  app.registerFactory('testService', [indexImpl]);
});

