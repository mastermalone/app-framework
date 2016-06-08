
define(['app', 'app-audio-service'], function (app) {//Don't add custom made angular services as an argument
  'use strict';
  
  app.registerDirective('appAudio', [function (scope, element, attrs, ctrl) {
   
    return {
      restrict: 'AE',
      scope: {
        playList: '@',
        autoPlay: '@',
        api: '@'
      },
      controller: 'appAudioController',
      controllerAs: 'appACtrl',
      bindToController: true,
      link: function (scope, element, attrs, ctrl) {        
        
        /*
         * pass in scope and the controller ID for use with the caching service
         * If no id is specified, pass in an empty string 
         */
        ctrl.getData(scope, ctrl.storageID, function (data) {
          ctrl.setStorageID();
          
          console.log('THE AUDIO DATA', data);
          if (ctrl.autoPlay === 'true') {
          	ctrl.startAudio(data);
          }
        });
      }
    };
  }]);
  
  app.registerController('appAudioController', ['$scope', 'appAudioService', function ($scope, appAudioService) {
    var _this = this;
    var apiURL = _this.api || './webservicemocks/track-list/0.1/index.json';
    _this.storageID = 'appAudio';
    
    
    _this.getData = function (scope, storageID, callback) {
      appAudioService.getData(apiURL, scope, _this.storageID, callback);
    };
    
    _this.startAudio = function (data) {
      appAudioService.init(data);
    };
    _this.setStorageID = function () {
      appAudioService.setStorageID(_this.storageID);
    };
  }]);
});
