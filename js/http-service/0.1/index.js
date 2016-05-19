require.config({
  paths: {
    'http-index-impl': './js/http-service/0.1/index-impl'
  }
});

define(['app', 'http-index-impl'], function (app, httpIndexImpl) {
  'use strict';
  /*
   * @param url string
   * @param scope object
   * @param callback function
   */
  app.registerFactory('httpService', ['$http', 'cachingService', httpIndexImpl]);
});
