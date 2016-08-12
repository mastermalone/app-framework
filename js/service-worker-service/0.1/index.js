require.config({
  paths: {
    'service-worker-impl': './js/service-worker-service/0.1/index-impl'
  }
});

define(['app', 'service-worker-impl'], function (app, serviceWorkerImpl) {
  'use strict';
  
  app.registerFactory('serviceWorker', ['$q', serviceWorkerImpl]);
});
