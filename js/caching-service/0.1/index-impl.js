define(function () {
  'use strict';
  console.log('CACHING SERVICE IMPL');
  return function CachingFactory () {
    function CachingService () {
      var _this = this;
      this.cachedPayload = {};
      this.storedResponses = [];
    }

    CachingService.prototype = {
      constructor: CachingService,
      getPayload: function (payload, storageID) {
        storageID =  typeof storageID === 'undefined' ?  'API' + Math.random(9999999) : storageID;
        this.cachedPayload = JSON.stringify(payload);
        this.setLocalStorage(this.cachedPayload, storageID);
        console.log('STORAGE ID', storageID);
      },
      setLocalStorage: function (payload, storageID) {
        var ls = localStorage;
        ls.clear();
        ls.setItem(storageID, payload);
      },
      doesPayloadExist: function () {
        console.log('CHECKING PAYLOAD', this);
        return false;
      }
    };

    return {
      getPayload: CachingService.prototype.getPayload,
      setLocalStorage: CachingService.prototype.setLocalStorage,
      doesPayloadExist: CachingService.prototype.doesPayloadExist,
    };
  }
});
