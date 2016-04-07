require.config({
  paths: {
    'css-t-impl': './js/css-transition-service/0.1/index-impl'
  }
});

define(['app', 'css-t-impl'], function (app, cssTImpl) {
  'use strict';
  app.registerFactory('cssTransition', [cssTImpl]);
});