require.config({
  paths: {
    'caching-service-impl': './js/caching-service/0.1/index-impl'
  }
});

define(['app', 'caching-service-impl'], function (app, cachingServiceImpl) {
  'use strict';
  app.registerFactory('cachingService', [cachingServiceImpl]);
});
