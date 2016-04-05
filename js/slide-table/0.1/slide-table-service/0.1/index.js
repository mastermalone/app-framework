require.config({
  paths: {
    'st-index-impl': './js/slide-table/0.1/slide-table-service/0.1/index-impl'
  }
});


define(['app', 'st-index-impl'], function (app, slideTFactory) {
  'use strict';
  //Inject your angular services here for use in your service, which is just a plain old JavaScript object
  app.registerFactory('slideTableService', ['$http', slideTFactory]);
});
