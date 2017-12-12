define(['peaks'], function soundWaveServiceModule(Peaks) {
  'use strict';
  console.log('THE PARENT', parent.window);
  return function SoundWaveFactory() {
    var SoundWaveService = {
      p: null,
      duration: 0,
      currentSegments: [],
      config: null,
      //createWave: function createWave(elm, audio, context) {
      createWave: function createWave(config) {
        if (typeof config !== "object") {
          console.log('You did not provide a config object');
          return;
        }
        
        config.mediaElm.setAttribute('src', config.source);
        SoundWaveService.config = config;
        
        SoundWaveService.p = Peaks.init({
          container: config.container,
          mediaElement: config.mediaElm,
          audioContext: config.audioContext,
          zoomLevels: [512, 1024, 2048, 4096]
        });
        
        //SoundWaveService.p.verboseMemoryLeak = true;
        SoundWaveService.p.on('peaks.ready', function() {
          // do something when the waveform is displayed and ready
          console.log('Audio duration', config.mediaElm.duration);
          SoundWaveService.duration = config.mediaElm.duration;
          SoundWaveService.autoHighlight();
          config.waveLoaded = true;
          console.log('Creating the Wave!!', config.audioContext);
        });
      },
      autoHighlight: function autoHighlight() {
        var highlightColor = ['#ff0000', '#1E5799'];
        var colorToggle = 0;
        var duration = Math.floor(SoundWaveService.duration);
        var highlights = [];
        
        //Mock the highlight data
        for (var i = 0; i < duration; i++) {
          if (i > 0) {
            //config.peaksInstance.segments.add({
            SoundWaveService.p.segments.add({
              startTime: (i-0.5),
              endTime: (i+0.5),
              editable: true,
              color: highlightColor[colorToggle],
              labelText: "My label: "+i
            });
           
            colorToggle = colorToggle === 0 ? colorToggle = 1 : colorToggle = 0;
          }
        }
      },
      addHighlight: function addHighlight() {
        //add highlighs
        console.log('Adding Highlight', SoundWaveService.p.segments.getSegments());
        
        SoundWaveService.currentSegments = SoundWaveService.p.segments.getSegments().map(function getCurrentSegments(item, idx, attr) {
          return item;
        });
        console.log('PEAKS INSTANCE:', SoundWaveService.p);
        console.log('THE NEW SEGMENTS ARRAY:', SoundWaveService.currentSegments);
        SoundWaveService.autoHighlight();
        //SoundWaveService.createWave(SoundWaveService.config);//TODO test is not good.  Memory is still an issue
      },
      deletHighlight: function deletHighlight() {
        //Delete highlight
        console.log('Deleting Highlight');
        
        SoundWaveService.p.segments.removeAll();
        //SoundWaveService.p.destroy();
      },
      zoomIn: function zoomIn() {
        //Zoom In
        SoundWaveService.p.zoom.zoomIn();
      },
      zoomOut: function zoomOut() {
        //Zoom Out
        SoundWaveService.p.zoom.zoomOut();
      }
    };
    
    return {
      createWave: SoundWaveService.createWave,
      addHighlight: SoundWaveService.addHighlight,
      deletHighlight: SoundWaveService.deletHighlight,
      zoomIn: SoundWaveService.zoomIn,
      zoomOut: SoundWaveService.zoomOut,
    };
  };
});
