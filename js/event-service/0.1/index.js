require.config({
  paths: {
    'event-service-impl': './js/event-service/0.1/index-impl'
  }
});

define(['app', 'emitter', 'event-service-impl'], function (app, emitter, eventServiceImpl) {
  'use strict';
  app.registerFactory('eventService', [eventServiceImpl]);
});
