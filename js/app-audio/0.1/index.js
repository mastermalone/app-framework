
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
        //console.log('AUDIO DIRECTIVE');
        //console.log('REGISTERING DIRECTIVE');
        
        
        ctrl.getData(scope, function (data) {
          //console.log('HERES YO DATA', data);
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
    
    _this.getData = function (scope, callback) {
      appAudioService.getData(apiURL, scope, callback);
    };
    
    _this.startAudio = function (data) {
      //console.log('MY AUDIO', appAudioService);
      appAudioService.init(data);
    };
  }]);
});
