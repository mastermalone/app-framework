define(['wavesurfer', 'wavesurfer-timeline'], function waveModule (wavesurfer, wavesurferTimeline) {
  'use strict';
  
  return function WaveFactory() {
    var waveService = {
      init: function init(params, audioPath) {
                
        if (!params || !audioPath) {
          throw new Error('You have failed tp pass in the paramers needed for this wavesurfer service to work');
          return;
        }
                
        wavesurfer.init(params);
        
        wavesurfer.on('ready', function () {
          wavesurfer.play();
        });
        wavesurfer.load(audioPath);
        
        waveService.createControls();
      },
      createControls: function createControls() {
        var playBtn = document.createElement('button');
        var ZoomBtn = document.createElement('button');
        var ZoomOutBtn = document.createElement('button');
        var bdy = document.getElementsByTagName('body');
        
        playBtn.innerHTML = 'Play/Pause Button';
        playBtn.addEventListener('click', waveService.playPause, true);
        
        ZoomBtn.innerHTML = 'Zoom In';
        ZoomBtn.addEventListener('click', waveService.zoomIn);
        
        ZoomOutBtn.innerHTML = 'Zoom Out';
        ZoomOutBtn.addEventListener('click', waveService.zoomOut);
        
        bdy[0].appendChild(playBtn);
        bdy[0].appendChild(ZoomBtn);
        bdy[0].appendChild(ZoomOutBtn);
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
        //wavesurfer.zoom(1000);
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
