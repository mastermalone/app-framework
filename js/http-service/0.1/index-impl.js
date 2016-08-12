define(function () {

  'use strict';

  return function HTTPFactory(http, cachingService) { //Dependencies will be loaded in order as the angular dependicie injecting order in index.js
    var options = {
      _this: this,
      checkLocalStorage: function (storageID) {
        return cachingService.isPayInLocalStorage(storageID);
      },
      getData : function (url, scope, storageID, callback) {
        var _this = this;
        var message;
        
        //TODO remove this harsh check and make it more agnostic 
        if (typeof storageID !== 'string') {
          console.log('You did not specify the ID of the controller for caching the API response.  Please set _this.storageID in your controller.');
          return;
        }
        //TODO remove this harsh check and make it more agnostic      
        if (!_this.checkLocalStorage(storageID)) {
          http({
            method: 'GET',
            url: url,
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function successfulHTTP(response) {
            if (typeof callback === 'function') {callback(response.data);};
            cachingService.getPayload(response.data, _this.setID);
          }, function erroneusHTTP(response) {
            message = response;
          });
        }else {
          console.log('GETTING DATA FROM LOCAL STORAGE INSTEAD');
          try {
            var data = JSON.parse(window.localStorage[storageID]);
            if (typeof callback === 'function') {
              callback(data);
            };
          }catch(e){
            console.log('There was an error', e);
          }
        }
      },
      setStorageID: function (id) {
        this.setID = id;
        console.log('SETTING STORAGE ID', this);
      }
    };
    return {
      options: options
    };
  };
});
