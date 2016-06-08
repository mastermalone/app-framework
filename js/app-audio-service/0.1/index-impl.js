define(function () {
  'use strict';
  
  return function AppAudioFactory(http, httpService) {
       
    function AppAudioObject(file, settings){
      var audioTag = document.createElement('AUDIO');
      var _this = this;
      this.file = file;
      this.settings = typeof settings !== 'object' ? {}: settings;
    }
    
    AppAudioObject.prototype = {
      constructor: AppAudioObject,
      init: function (data) {
        var audio = AppAudioObject.prototype.createAudio();
        var bdy = document.getElementsByTagName('body');
        bdy[0].appendChild(audio);
        AppAudioObject.prototype.playAll(audio, data);
      },
      //Expose httpService methods via these wrappers
    
      /*
       * @param url: String
       * @param scope: Object
       * @param storageID: String
       * @param callback: Function
       */
      getData: function (url, scope, storageID, callback) {
        httpService.options.getData(url, scope, storageID, callback);
      },
      setStorageID: function (id) {
        console.log('APP AUDIO ID', id);
        httpService.options.setStorageID(id);
      },
      createAudio: function () {
        var audioTag = document.createElement('AUDIO');
        return audioTag;
      },
      play: function (audio) {
        audio.src = '../audio/ocean.mp3';
        console.log('Playing audio');
        audio.play();
      },
      pause: function (audio) {
        console.log('Pausing audio');
        audio.pause();
      },
      stop: function (audio) {
        console.log('Stopping audio');
        audio.stop();
      },
      randomize: function (audio) {
        console.log('Randomizing audio');
      },
      loop: function (audio) {
        console.log('Looping audio');
      },
      replay: function (audio) {
        console.log('Replaying audio');
      },
      playAll: function (audio, list) {
        var frag = document.createDocumentFragment();
        var length = 2;
        var idx = 0;
        audio.src = list.payload.event[idx].file;
        audio.play();
        
        audio.addEventListener('ended', function (e) {
          idx < length ? idx++ : idx = 0;
          audio.src = list.payload.event[idx].file;
          console.log('ended');
          audio.play();
        });
      }
    };
    return {
      init: AppAudioObject.prototype.init,
      getData: AppAudioObject.prototype.getData,
      setStorageID: AppAudioObject.prototype.setStorageID,
      play: AppAudioObject.prototype.play,
      pause: AppAudioObject.prototype.pause,
      stop: AppAudioObject.prototype.stop,
      randomize: AppAudioObject.prototype.randomize,
      loop: AppAudioObject.prototype.loop,
      replay: AppAudioObject.prototype.replay,
      playAll: AppAudioObject.prototype.playAll
    };
  };
});
