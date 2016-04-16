require.config({
  paths: {
    'slider-index-impl': './js/slider/0.1/slider-service/0.1/index-impl'
  }
});

define(['app', 'slider-index-impl'], function (app, sliderIndexImpl) {
  'use strict';
  app.registerFactory('sliderService', ['$http', 'httpService', sliderIndexImpl]);
});
