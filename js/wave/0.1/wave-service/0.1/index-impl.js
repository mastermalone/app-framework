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
      init: waveService.init,
      playPause: waveService.playPause,
      zoomIn: waveService.zoomIn,
      zoomOut: waveService.zoomOut,
      zoomAmount: waveService.zoomAmount
    };
  };
});