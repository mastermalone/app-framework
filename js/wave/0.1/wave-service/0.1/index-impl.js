define(['wavesurfer', 'wavesurfer-timeline'], function waveModule (wavesurfer, wavesurferTimeline) {
  'use strict';
  
  return function WaveFactory() {
    var waveService = {
      init: function init(params, audioPath, controls) {
                
        if (!params || !audioPath) {
          throw new Error('You have failed tp pass in the paramers needed for this wavesurfer service to work');
          return;
        }
                
        wavesurfer.init(params);
        wavesurfer.on('ready', function () {
          wavesurfer.play();
        });
        wavesurfer.load(audioPath);
        waveService.createControls(controls);
      },
      createControls: function createControls(controls) {
        //Normally no DOM manipulation in the service.  This is only for testing.
        var bdy = document.getElementsByTagName('body');
        
        for (var i = 0; i < controls.elements.length; i++) {
          console.log('The Calls', waveService[controls.elements[i].action]);
          var btn = document.createElement('button');
          btn.innerHTML = controls.elements[i].text;
          btn.addEventListener('click', waveService[controls.elements[i].action], true);
          bdy[0].appendChild(btn);
        }
      },
      playPause: function playPause() {
        wavesurfer.playPause();
      },
      zoomIn: function zoomIn() {
        if (waveService.zoomAmount < 1000) {
          waveService.zoomAmount += 100;
          wavesurfer.zoom(waveService.zoomAmount);
        }
        console.log('Should be zooming in', waveService.zoomAmount);
      },
      zoomOut: function zoomOut() {
        if (waveService.zoomAmount > 0) {
          waveService.zoomAmount -= 100;
          wavesurfer.zoom(waveService.zoomAmount);
        }
        console.log('Should be zooming  out', waveService.zoomAmount);
      },
      zoomAmount: 100
    };
    
    return {
      init: waveService.init
    };
  };
});
