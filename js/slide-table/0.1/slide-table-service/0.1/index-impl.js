
define(function () {
  'use strict';

  return function SlideTableFactory (http, httpService) {
    var _this = this;
    //Expose httpService methods via these wrappers
    
    /*
     * @param url: String
     * @param scope: Object
     * @param storageID: String
     * @param callback: Function
     */
    function getData(url, scope, storageID, callback) {
      //Injected service, httpService called
      httpService.options.getData(url, scope, storageID, callback);
    }

    function setStorageID(id) {
      httpService.options.setStorageID(id);
    }

    return {
      getData: getData,
      setStorageID: setStorageID
    };
  };
});
