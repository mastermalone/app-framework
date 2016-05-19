

define(function () {
  'use strict';
  console.log('LOADING HTTP SERVICE');

  return function HTTPFactory(http, cachingService) { //Dependencies will be loaded in order as the angular dependicie injecting order in index.js
     var options = {

      stored: {},
      checkLocalStorage: function () {
        var ls = localStorage;
        console.log('WHAT IS LOCAL STORAGE', ls);
        return cachingService.doesPayloadExist();
      },
      getData : function (url, scope, callback, storageID) {
        var _this = this;
        var message;

        console.log('storageID', storageID);

        if (_this.checkLocalStorage() === false) {

          console.log('FROM HTTP:', cachingService);
          http({
            method: 'GET',
            url: url
          }).then(function successfulHTTP(response) {
            _this.stored =  response.data.payload;
            if (typeof callback === 'function') {callback(response.data);};
            cachingService.getPayload(response.data.payload, storageID);
          }, function erroneusHTTP(response) {
            message = response;
          });
        }else {
          console.log('LOCAL STORAGE HAS A PAYLOAD');
        }
      }
    };

    return {
      options: options
    };
  };
});
