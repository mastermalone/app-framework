require.config({
  paths: {
    'linked-list-index-impl': './js/linked-list-service/0.1/index-impl'
  }
});

define (['app', 'linked-list-index-impl'], function linkedListModule(app, indexImpl) {
  'use strict';
  app.registerFactory('linkedListService', [indexImpl]);
  
});
