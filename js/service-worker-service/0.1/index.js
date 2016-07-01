require.config({
  paths: {
    'service-worker-impl': './js/service-worker-service/0.1/index-impl'
  }
});

define(['app', 'service-worker-impl'], function (app, serviceWorkerImpl) {
  'use strict';
  
  console.log('THIS IS THE SERVICE INDEX', serviceWorkerImpl);
  app.registerFactory('serviceWorker', [serviceWorkerImpl]);
});
