define(function () {
  'use strict';
  console.log('CACHING SERVICE IMPL');
  return function CachingFactory () {
    
    var CachingService = {
      /* 
       *@param: {Object} payload
      * @param: {String} storageID
      */

      getPayload: function (payload, storageID) {
        //TODO Fix this logic to make more sense
        storageID =  typeof storageID === 'undefined' ?  'API' + Math.random(9999999) : storageID;

        this.cachedPayload = JSON.stringify(payload);
        this.setLocalStorage(this.cachedPayload, storageID);
      },
      setLocalStorage: function (payload, storageID) {
        if (localStorage.hasOwnProperty(storageID)) {
          return;
        }else {
          window.localStorage.setItem(storageID, payload);
          console.log('NEW KEY AND VALUE FOR LOCAL STORAGE', storageID, window.localStorage);
        }
      },
      isPayInLocalStorage: function (prop) {
        var ls = window.localStorage;
        var exists = false;
        
        !ls.hasOwnProperty(prop) ? exists = false : exists = true;
        console.log('LS PROP EXISTS', exists);
        return exists; //Change to false to work all day long
      }
    };

    return {
      getPayload: CachingService.getPayload,
      setLocalStorage: CachingService.setLocalStorage,
      isPayInLocalStorage: CachingService.isPayInLocalStorage,
    };
  };
});
