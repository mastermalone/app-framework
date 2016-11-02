define(['wavesurfer', 'wavesurfer-timeline'], function waveModule (wavesurfer, wavesurferTimeline) {
  'use strict';
  
  return function WaveFactory() {
    var waveService = {
      init: function init(params, audioPath) {
        console.log('STARTING WAVE SERVICE', audioPath);
        
        if (!params || !audioPath) {
          throw new Error('You have failed tp pass in the paramers needed for this wavesurfer service to work');
          return;
        }
                
        wavesurfer.create(params);
        
        wavesurfer.on('ready', function () {
          wavesurfer.play();
        });
        
        wavesurfer.load(audioPath);
      }
    };
    
    return {
      init: waveService.init
    };
  };
});
