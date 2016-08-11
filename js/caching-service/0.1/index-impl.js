define(function () {
  'use strict';
  console.log('CACHING SERVICE IMPL');
  return function CachingFactory () {
    function CachingService () {
      var _this = this;
      this.cachedPayload = {};
      this.storedResponses = [];
      this.ls = localStorage;
    }

    CachingService.prototype = {
      constructor: CachingService,
      /*
      *@param: {Object} payload
      *@param: {String} storageID
      */

      getPayload: function (payload, storageID) {
        storageID =  typeof storageID === 'undefined' ?  'API' + Math.random(9999999) : storageID;

        this.cachedPayload = JSON.stringify(payload);
        this.setLocalStorage(this.cachedPayload, storageID);
        //console.log('STORAGE ID', storageID);
      },
      setLocalStorage: function (payload, storageID) {
        if (localStorage.hasOwnProperty(storageID)) {
          return;
        }else {
          window.localStorage.setItem(storageID, payload);
          //console.log('SETLOCALSTORAGE: Storage ID', storageID);
          console.log('NEW KEY AND VALUE FOR LOCAL STORAGE', storageID, window.localStorage);
        }
      },
      doesPayloadExist: function (prop) {
        var ls = window.localStorage;
        var exists = false;
        
        !ls.hasOwnProperty(prop) ? exists = false : exists = true;
        //ls.length < 1 && !ls.hasOwnProperty(prop) ? exists = false : exists = true;
        //console.log('CHECKING PAYLOAD', ls.hasOwnProperty(prop));
        console.log('LS PROP EXISTS', exists);
        return exists; //Change to false to work all day long
      }
    };

    return {
      getPayload: CachingService.prototype.getPayload,
      setLocalStorage: CachingService.prototype.setLocalStorage,
      doesPayloadExist: CachingService.prototype.doesPayloadExist,
    };
  };
});
