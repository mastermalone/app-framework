require({
  paths: {
    'peaks': './node_modules/peaks.js/peaks',
    'sws-impl': './js/sound_wave/0.1/sound_wave_service/0.1/index-impl'
  }
});

define(['app', 'peaks', 'sws-impl'], function soundWaveServiceModule(app, peaks, swsImpl) {
  'use strict';
  console.log('IMPL', swsImpl);
  app.registerFactory('soundWaveService', [swsImpl]);
});
