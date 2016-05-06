require.config({
  paths: {
    'app-audio-impl': './js/app-audio-service/0.1/index-impl'
  }
});

define(['app', 'app-audio-impl'], function (app, appAudioImpl) {
  
  //console.log('Audio is loading', appAudioImpl);
  'use strict';
  app.registerFactory('appAudioService', ['$http', 'httpService', appAudioImpl]);
});
