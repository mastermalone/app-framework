define(function () {

  'use strict';
  //console.log('LOADING HTTP SERVICE');

  return function HTTPFactory(http, cachingService) { //Dependencies will be loaded in order as the angular dependicie injecting order in index.js
    var options = {
      _this: this,
      setID: '', //value for key name used by localStorage to identify the different values
      stored: {},
      checkLocalStorage: function (storageID) {
        return cachingService.doesPayloadExist(storageID);
      },
      getData : function (url, scope, storageID, callback) {
        var _this = this;
        var message;
        
        console.log('CHECK LOCAL STORAGE RESULT', storageID);        
        console.log('ACCORING TO HTTP, LOCAL STORAGE HAS DATA?:', _this.checkLocalStorage(storageID));  
        
        if (typeof storageID !== 'string') {
          console.log('You did not specify the ID of the controller for caching the API response.  Please set _this.storageID in your controller.');
          return;
        }      
        if (!_this.checkLocalStorage(storageID)) {
          http({
            method: 'GET',
            url: url,
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function successfulHTTP(response) {
            _this.stored[_this.setID] = response.data.payload;
            if (typeof callback === 'function') {callback(response.data);};
            cachingService.getPayload(response.data, _this.setID);
            console.log('MAKING API CALL', storageID);
          }, function erroneusHTTP(response) {
            message = response;
          });
        }else {
          console.log('GETTING DATA FROM LOCAL STORAGE INSTEAD');
          try {
            var data = JSON.parse(window.localStorage[storageID]);
            console.log('THE STORAGE ID FROM HTTP', ':', storageID);
            if (typeof callback === 'function') {
              callback(data);
            };
          }catch(e){
            //error
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
