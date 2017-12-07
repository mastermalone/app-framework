require({
  paths: {
    'sw-html': './js/sound_wave/0.1/index.html',
    'sw-css': './js/sound_wave/0.1/index.css'
  }
});

define(['app', 'text!sw-html', 'text!sw-css', 'sound-wave-service'], function soundWaveModule(app, html, css) {
  'use strict';
  
  app.registerController('swController', [
  '$scope', 
  '$element', 
  '$compile', 
  'soundWaveService',
  function swControllerImpl($scope, $element, $compile, soundWaveService) {
    var _this = this;
    _this.title = 'Sound Wave using Peaks';
    _this.waveLoaded = false;
    _this.swService = soundWaveService;
  }]);
  
  app.registerDirective('soundWave', [function soundWave() {
    return {
      restrict: 'E',
      scope: {
        source:'@'
      },
      template: html,
      controller: 'swController',
      controllerAs: 'swCtrl',
      bindToController: true,
      link: function soundWaveDirective(scope, element, attrs, ctrl) {
        var containerElm = document.querySelector('#peaks-container');
        var mediaElm = document.querySelector('audio');
        var audioContext = new AudioContext();
        
        ctrl.swService.createWave({
          container: containerElm, 
          mediaElm: mediaElm, 
          audioContext: audioContext,
          source: ctrl.source,
          waveLoaded:ctrl.waveLoaded
        });
      }
    };
  }]);
});
