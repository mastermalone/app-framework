require.config({
  paths: {
    'wavehtml': './js/wave/0.1/index',
    'wavecss': './js/wave/0.1/index',
  }
});

define([
  'app', 
  'wave-service', 
  'text!wavehtml.html', 
  'text!wavecss.css'], 
  function (app, waveService, waveHtml, waveCss) {
  'use strict';
  
  app.registerDirective('waveForm', [function waveDirective() {
    return {
      restrict: 'AE',
      scope: {
        
      },
      template: waveHtml,
      controller: 'WaveFormController',
      controllerAs: 'wfCtrl',
      bindToController: true,
      link: function waveComplie(scope, element, attrs, ctrl) {
        console.log('HERE IS THE WAVE ELEMENT:', element);
        var params = {
          container: '#waveform',
          waveColor: 'violet',
          progressColor: 'purple'
        };
        
        var audioPath = '../audio/test_audio.mp3';
        
        var wf = document.getElementById('waveForm');
        
        ctrl.initWaveService(params, audioPath);
      }
    };
  }]);
  
  app.registerController(
    'WaveFormController', 
    ['waveService',
    '$scope', 
    '$element', 
    '$compile', 
    function waveController(waveService, $scope, $element, $compile) {
      var style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = waveCss;
      $element.append($compile(style)($scope));
      
      this.title = 'Wave Form';
      
      this.initWaveService = function initWaveService(params, audioPath) {
        waveService.init(params, audioPath);
      };
      
  }]);
});
