require.config({
  paths: {
    'wave-service-impl': './js/wave/0.1/wave-service/0.1/index-impl'
  }
});

define([
  'app', 
  'wave-service-impl'], 
  function waveService(app, waveServiceImpl) {
  app.registerFactory('waveService', [waveServiceImpl]);
});
