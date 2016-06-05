define(function () {

  'use strict';
  //console.log('LOADING HTTP SERVICE');

  return function HTTPFactory(http, cachingService) { //Dependencies will be loaded in order as the angular dependicie injecting order in index.js
    var options = {
      _this: this,
      setID: '', //value for key name used by localStorage to identify the different values
      stored: {},
      checkLocalStorage: function () {
        return cachingService.doesPayloadExist();
      },
      getData : function (url, scope, callback, storageID) {
        var _this = this;
        var message;

        if (_this.checkLocalStorage() === false) {
          http({
            method: 'GET',
            url: url
          }).then(function successfulHTTP(response) {
            _this.stored[_this.setID] = response.data.payload;
            if (typeof callback === 'function') {callback(response.data);};
            cachingService.getPayload(response.data, _this.setID);
          }, function erroneusHTTP(response) {
            message = response;
          });
        }else {
          console.log('LOCAL STORAGE HAS A PAYLOAD');
          try {
            var data = JSON.parse(window.localStorage[_this.setID]);
            
            if (typeof callback === 'function') {
              callback(data);
            };
            console.log('CACHED DATA', data);
          }catch(e){
            //error
            console.log('There was an error');
          }
          
          
          //console.log('Local Storage', data);
          //if (typeof callback === 'function' && window.localStorage.hasOwnProperty(_this.setId)) {callback(data);};
            
          console.log('KEY', typeof data === "undefined");
        }
      },
      setStorageID: function (id) {
        this.setID = id;
        console.log('SETTING STORAGE ID', this.setID);
      }
    };
    //console.log('OPTIONS OBJ', options);
    return {
      options: options
    };
  };
});
