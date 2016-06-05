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
      *@param: Object payload
      *@param: String storageID
      */

      getPayload: function (payload, storageID) {
        storageID =  typeof storageID === 'undefined' ?  'API' + Math.random(9999999) : storageID;

        this.cachedPayload = JSON.stringify(payload);
        this.setLocalStorage(this.cachedPayload, storageID);
        console.log('STORAGE ID', storageID);
      },
      setLocalStorage: function (payload, storageID) {
        CachingService.prototype.ls().clear();//For testing purposes.  More work is needed here
        CachingService.prototype.ls().setItem(storageID, payload);
        console.log('LS', CachingService.prototype.ls());
      },
      doesPayloadExist: function () {
        console.log('CHECKING PAYLOAD', CachingService.prototype.ls().hasOwnProperty('slideTable'));
        var ls = CachingService.prototype.ls();
        var exists = false;
        ls.length < 1 && Object.keys(CachingService.prototype.ls())['slideTable'] !== 'undefined' ? exists = false : exists = true;
        console.log('EXISTS', exists);
        //return exists; //Release this dragon when ready
        return exists; //Change to false to work all day long
      },
      ls: function () {
        var ls = localStorage;
        return ls;
      }
    };

    return {
      getPayload: CachingService.prototype.getPayload,
      setLocalStorage: CachingService.prototype.setLocalStorage,
      doesPayloadExist: CachingService.prototype.doesPayloadExist,
    };
  };
});
