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
    
    _this.createWave = function createWave (elm, mediaElm, audioContext) {
      soundWaveService.createWave(elm, mediaElm, audioContext);
    };
  }]);
  
  app.registerDirective('soundWave', [function soundWave() {
    return {
      restrict: 'E',
      scope: {},
      template: html,
      controller: 'swController',
      controllerAs: 'swCtrl',
      bindToController: true,
      link: function soundWaveDirective(scope, element, attrs, ctrl) {
        var elm = document.querySelector('#peaks-container');
        var mediaElm = document.querySelector('audio');
        var audioContext = new AudioContext();
        ctrl.createWave(elm, mediaElm, audioContext);
      }
    };
  }]);
});
