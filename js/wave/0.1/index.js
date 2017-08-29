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
        audio: '@'
      },
      template: waveHtml,
      controller: 'WaveFormController',
      controllerAs: 'wfCtrl',
      bindToController: true,
      link: function waveCompile(scope, element, attrs, ctrl) {
        var params = {
          container: '#waveform',
          waveColor: 'violet',
          progressColor: 'purple',
          backend: 'MediaElement',
          renderer: 'MultiCanvas',
          maxCanvasWidth: 900,
          scrollParent: true
        };
        
        var controls = {
          elements: [
            {
              tag: 'button',
              text: 'Play/Pause Btn',
              action: 'playPause'
            },
            {
              tag: 'button',
              text: 'Zoom In Btn',
              action: 'zoomIn'
            },
            {
              tag: 'button',
              text: 'Zoom Out Btn',
              action: 'zoomOut'
            }
          ]
        };
        
        var waveActions = {
          init: function initWave() {
            ctrl.initWaveService(params, attrs.audio, controls);
            waveActions.createControls(controls);
          },
          createControls: function createControls(controls) {
            var ctrls = controls;
           
            ctrl.passWaveServiceToCallBack(function createCtrls(waveService){
              var bdy = document.getElementsByTagName('body');
              var ctrlDiv = element[0].children[2];
              //console.log('THE CONTROL DIV', element[0].children[2]);
              console.log('THE CONTROL DIV', element.find('.controls').css('background', '#ff0000'));
            
              for (var i = 0; i < ctrls.elements.length; i++) {
                var btn = document.createElement('button');
                btn.innerHTML = controls.elements[i].text;
                btn.addEventListener('click', waveService[ctrls.elements[i].action], true);
                ctrlDiv.appendChild(btn);
                //element.find('.controls').append(btn);
              }
            });
          }
        };        
        waveActions.init();
        
        scope.$on('$destroy', function destroyed () {
          console.log('Wave was DESTROYED!', element);
          element.remove();
        });
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
      
      this.initWaveService = function initWaveService(params, audioPath, controls) {
        waveService.init(params, audioPath, controls);
      };
      
      this.passWaveServiceToCallBack = function passWaveServiceToCallBack(callback) {
        if (typeof callback !== 'function') {
          return;
        }else {
          callback(waveService);
        }
      };
      
  }]);
});
