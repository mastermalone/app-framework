require.config({
  paths: {
    'index-impl': './js/js_algo/0.1/js_algo_service/0.1/index-impl'
  }
});

define(['app', 'index-impl'], function algoService(app, indexImpl) {
  'use strict';
  app.registerFactory('algoService', [indexImpl]);
});
