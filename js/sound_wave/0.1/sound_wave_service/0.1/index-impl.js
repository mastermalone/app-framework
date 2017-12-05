define(['peaks'], function soundWaveServiceModule(Peaks) {
  'use strict';
  
  return function SoundWaveFactory() {
    var SoundWaveService = {
      createWave: function createWave(elm, audio, context) {
        audio.setAttribute('src', '../../../audio/snd_30_days_until_ellens_birthday.mp3');
        var p = Peaks.init({
          container: elm,
          mediaElement: audio,
          audioContext: context
        });
        
        p.on('peaks.ready', function() {
          // do something when the waveform is displayed and ready
        });
        console.log('Creating the Wave!!', context);
      }
    };
    
    return {
      createWave: SoundWaveService.createWave
    };
  };
});
