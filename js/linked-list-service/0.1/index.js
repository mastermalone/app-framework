require.config({
  paths: {
    'index-impl': './js/linked-list-service/0.1/index-impl'
  }
});

define (['app', 'index-impl'], function linkedListModule(app, indexImpl) {
  'use strict';
  app.registerFactory('linkedListService', [indexImpl]);
  
});
